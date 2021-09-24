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
}
