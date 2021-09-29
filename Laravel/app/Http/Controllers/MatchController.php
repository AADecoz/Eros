<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Matching;
use Illuminate\Support\Facades\DB;
use http\Message;
use App\Models\chat;

class MatchController extends Controller
{
    public function logLike(request $data){
        Matching::Create([
            'UserId' => $data->userid,
            'MatchId' => $data->matchid,
            'matched' => $data->matched
        ]);

        return $data;
    }

    public function showMatches(request $data){
        $match = DB::table('matchings as m1')
            ->join('matchings as m2', 'm1.UserId', '=', 'm2.MatchId')
            ->join('users', 'm2.UserId', '=', 'users.UserId' )
            ->whereRaw("`m2`.`UserId` = `m1`.`MatchId`")
            ->where('m1.matched', '=', '1')
            ->where('m2.matched', '=', '1')
            ->where('m1.UserId', '=', $data->userid)
            ->get();

        if(count($match)==0){
            return response()->json(['user' => null, 'status_message' =>"No matches"], 200);
        }   else{
              return response()->json(['user' => $match, 'status_message' =>"Matches found"], 200);
        } 
      
    }

    public function deleteMatch(request $data){
        Matching::where('UserId',$data->userid)->where('MatchId',$data->matchid)->Update([
            'UserId'=>$data->userid,
            'MatchId'=>$data->matchid,
            'matched'=>0
        ]);

        Chat::where('from_id',$data->userid)->where('to_id',$data->matchid)->orWhere('from_id',$data->matchid)->where('to_id',$data->userid)->delete();

    }
}
