<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Conversation;
use App\User;
use Carbon\Carbon;

class Message extends Model
{
    protected $guarded = [];


    public function sender() {
       return $this->belongsTo(User::class, 'sender_id');
    }

    public function receiver() {
        return $this->belongsTo(User::class, 'friend_id');
    }

    public function conversation() {
        $this->belongsTo(Conversation::class);
    }
    
}
