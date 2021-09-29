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
Route::post('/api/match', '\App\Http\Controllers\MatchController@showMatches')->name('/api/match');
Route::post('/api/update', '\App\Http\Controllers\UserController@update')->name('/api/update');
Route::post('/api/register', '\App\Http\Controllers\UserController@register')->name('/api/register');
Route::post('/api/like', '\App\Http\Controllers\MatchController@logLike')->name('/api/like');
Route::post('/api/login', '\App\Http\Controllers\UserController@login')->name('/api/login');
Route::post('/api/feed', '\App\Http\Controllers\FeedController@feed')->name('/api/feed');
Route::post('/api/verify', '\App\Http\Controllers\UserController@passwordVerification')->name('/api/verif');
Route::post('/api/upload', '\App\Http\Controllers\UserController@upload')->name('/api/upload');
Route::post('/api/showChat', '\App\Http\Controllers\chatController@showChat')->name('/api/showChat');
Route::post('/api/sendChat', '\App\Http\Controllers\chatController@sendChat')->name('/api/send');
Route::post('/api/deleteMatch', '\App\Http\Controllers\matchController@deleteMatch')->name('/api/deleteMatch');
Route::post('/api/alert', '\App\Http\Controllers\MatchController@alert')->name('/api/alert');


Route::get('/', function () {
    return view('welcome');
});
