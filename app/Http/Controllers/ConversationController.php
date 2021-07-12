<?php

namespace App\Http\Controllers;

use App\Conversation;
use App\Message;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ConversationController extends Controller
{
    public function create(Request $request) {
        $request->validate([
            'sender_id' => 'required',
            'friend_id' => 'required'
        ]);

        $conversation = Conversation::create([
            'sender_id' => $request->sender_id,
            'friend_id' => $request->friend_id
        ]);

        return $conversation;
    }

    public function show($sender_id, $friend_id) {
       try {
           $conversation = Conversation::where('sender_id', $sender_id)->where('friend_id', $friend_id)->with('messages.sender', 'messages.receiver')->firstOrFail();
            return $conversation;
       } catch(ModelNotFoundException $e) {
           $conversation = Conversation::where('sender_id', $friend_id)->where('friend_id', $sender_id)->with('messages.sender', 'messages.receiver')->firstOrFail();
            return $conversation;
        } catch (ModelNotFoundException $e) {
           return response([
               'status' => 404,
               'message' => 'Conversation does not exist' 
           ], 404);
       }
    }
}
