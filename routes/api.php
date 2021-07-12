<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:api'])->group(function () {
});

Route::post('/newConversation', 'ConversationController@create');
Route::post('/newMessage', 'MessageController@create');
Route::post('/message/{message}/delete', 'MessageController@destroy');
Route::get('/searchConversation/{sender_id}/{friend_id}', 'ConversationController@show');