<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use http\Message;
use App\Models\chat;

use Illuminate\Support\Facades\DB;

class chatController extends Controller
{
    public function showChat(Request $data){

        $id=$data->userid;
        $idConv= $data->matchid;
        $otherUser="";    
        $messages= DB::table('chats')->select('user1.name as from','body','user2.name as to')
        ->join('users as user1','chats.from_id','=','user1.UserId')
        ->join('users as user2','chats.to_id','=','user2.UserId')
        ->where('from_id',$id)
        ->where('to_id',$idConv)
        ->orWhere('to_id',$id)
        ->where('from_id',$idConv)
        ->get();
        
        if(count($messages)==0){
            return response()->json([ 'messages'=>$messages,'status_message'=>'not found'], 200);

         }else{
              return response()->json([ 'messages'=>$messages,'status_message'=>'found'], 200);
         }
 }

 public function sendChat(Request $data){
  
        Chat::create([
            'body' => $data->body,
            'from_id' => $data->userid,
            'to_id' => $data->matchid

        ]);

      

 }


}