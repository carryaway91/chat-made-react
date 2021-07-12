<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Message;

class Conversation extends Model
{
    protected $guarded = [];

    public function users() {
        return $this->belongsToMany(User::class);
    }

    public function messages() {
        return $this->hasMany(Message::class);
    }
}
