<?php

namespace App\Http\Controllers;

use http\Message;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(request $data){
        User::create([
            'name' => $data->name,
            'email' => $data->email,
            'password' => $data->password,
            'birthday' => $data->birthday,
            'sex'  => $data->sex,
            'preference' => $data->preference,
            'area' => $data->area,
            'intro' => $data->intro,
            'minAge' => $data->minAge,
            'maxAge' => $data->maxAge,
        ]);

        return response()->json(['message' => 'user created'], 201);
    }

    public function login(request $data){
        $login = DB::table('users')
            ->where('email', '=', $data->email)
            ->first();

        if(empty($login)){
            return response()->json(['user' => Null, 'status_message'=>'user not found'], 200);

        } else{
            return response()->json(['user' => $login, 'status_message'=>'user found'], 200);

        }
    }

}

