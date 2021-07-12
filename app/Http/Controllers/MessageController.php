<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\NewMessage;

class MessageController extends Controller
{
    public function create(Request $request) {
        $request->validate([
            'sender_id' => 'required',
            'friend_id' => 'required',
            'conversation_id' => 'required',
            'text' => 'required'
        ]);

        $message = Message::create([
            'sender_id' => $request->sender_id,
            'friend_id' => $request->friend_id,
            'conversation_id' => $request->conversation_id,
            'text' => $request->text
        ]);

        broadcast(new NewMessage($message))->toOthers();
        return $message;
    }

    public function destroy(Message $message) {
        return $message->delete();
    }
}
