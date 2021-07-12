<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('/{path?}', 'HomeController@index')->where('path', '.*')->middleware('auth');

Route::get('/login', function() { return view('auth.auth'); } )->name('login');
Route::get('/register', function() { return view('auth.auth'); } );
