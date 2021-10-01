<?php

namespace App\Http\Controllers;

use http\Message;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class feedController extends Controller
{
    public function feed(request $data){
        $notin = DB::table('users')
        ->join('matchings','users.UserId','=','matchings.MatchId')
        ->where('matchings.UserId',$data->userid)
        ->get('name');

        $notinarr=[];
        foreach($notin as $item){
            array_push($notinarr,$item->name);
        }

        $feed = DB::table('users')
        ->whereNotIn('name',$notinarr)
        ->where('UserId', '!=', $data->userid)
        ->where('preference', 'like' ,'%'.$data->sex.'%')
        ->where('birthday','<=',$data->minAge)
        ->where('birthday','>=',$data->maxAge)
        ->whereIn('sex', str_split($data->preference))
        ->get(['UserId','name','sex','area','birthday','preference','intro']);

        if(count($feed)==0){
            return response()->json(['user' => Null, 'status_message'=>'matches not found'], 200);

        } else{
            return response()->json(['user' => $feed, 'status_message'=>'matches found'], 200);

        }
    }
}
