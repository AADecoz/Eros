<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Matching;
use Illuminate\Support\Facades\DB;
use http\Message;

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
            ->join('matchings as m2', 'm1.MatchId', '=', 'm2.UserId')
            ->join('users', 'm2.UserId', '=', 'users.UserId' )
            ->where('m1.UserId', '=', 'm2.MatchId')
            ->where('m1.matched', '=', '1')
            ->where('m2.matched', '=', '1')
            ->where('m1.UserId', '=', $data->userid)
            ->get();
        return response()->json(['user' => $match, 'status_message' => 'match found'], 200);
    }
}
