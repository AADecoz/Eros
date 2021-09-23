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
Route::resource('users', \App\Http\Controllers\UserController::class);

Route::post('/api/register', '\App\Http\Controllers\UserController@register')->name('/api/register');
Route::post('/api/login', '\App\Http\Controllers\UserController@login')->name('/api/login');


Route::get('/', function () {
    return view('welcome');
});
