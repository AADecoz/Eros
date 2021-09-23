<?php

namespace App\Http\Controllers;

use http\Message;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class feedController extends Controller
{
    public function feed(request $data){
        $feed = DB::table('users')
            ->where('userID', '!=', $data->userid)
            ->where('preference', '=' ,$data->sex)
            ->where('sex', '=' ,$data->preference)
            ->get();

        if(count($feed)==0){
            return response()->json(['user' => Null, 'status_message'=>'user not found'], 200);

        } else{
            return response()->json(['user' => $feed, 'status_message'=>'user found'], 200);

        }
    }
}
