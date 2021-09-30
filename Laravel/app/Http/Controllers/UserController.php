<?php

namespace App\Http\Controllers;

use http\Message;
use Illuminate\Http\Request;
use App\Models\User;
use App\Notifications\verifyNotification;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Notification;
class UserController extends Controller{

    public function register(request $data){
        $randkey=rand(1000000000,100000000000);
        $minAge=date('Y-m-d',strtotime($data->birthday.' + 20 year'));
        $maxAge=date('Y-m-d',strtotime($data->birthday.' - 20 year'));
       $test= User::create([
            'name' => $data->name,
            'email' => $data->email,
            'password' => Hash::make($data->password),
            'birthday' => $data->birthday,
            'verifyKey'=>$randkey,
            'sex'  => $data->sex,
            'preference' => $data->preference,
            'area' => $data->area,
            'intro' => $data->intro,
            'minAge' => $minAge,
            'maxAge' => $maxAge,
            
        ]);

        $key=DB::get('users')->select()->where('email',$data->email)->first();
        

        $test->notify(new verifyNotification($key->verifyKey));        
        return response()->json(['message' => 'user created'], 201);
    }

    public function login(request $data){
        $login = DB::table('users')
            ->where('email', '=', $data->email)
            ->first(['UserId','name','email','birthday','sex','preference','area','intro','minAge','maxAge']);
        if(empty($login)){
            return response()->json(['user' => Null, 'status_message'=>'user not found'], 200);
        } else{
            
            return response()->json(['user' => $login, 'status_message'=>'user found'], 200);
        }
    }



    public function passwordVerification(request $data){
        $login = DB::table('users')
            ->where('email',"=",$data->email)
            ->first();
        if(!empty($login)){
            if(!Hash::check($data->password,$login->password) ){
                return response()->json([ 'status_message'=>'Wrong password'], 200);
            } else {
                $loginNoPass = DB::table('users')->select(['UserId','name','preference','sex','birthday','area','minAge','maxAge','intro'])
                ->where('email',"=",$data->email)
                ->first();
                
                return response()->json(['email_verify'=>$login->email_verified_at,'status_message'=>'Password correct','user'=>$loginNoPass], 200);
            }
        } else {
            return response()->json([ 'status_message'=>'Email not found'], 200);
        }
    }

    public function update(request $request){
        User::where('UserId', '=',$request->userid)->update([
            'name' => $request->username,
            'birthday' => $request->age,
            'sex'  => $request->sex,
            'preference' => $request->preference,
            'area' => $request->area,
            'intro' => $request->intro,
            'minAge' => $request->minage,
            'maxAge' => $request->maxage,
        ]);
    }

    function upload(Request $data){
       $file = $data->myFile;
       $localpath="C:/wamp64/www/MM/";
        $file->move($localpath.'datingsite/datingsite/src/assets/userprofiles/', $file->getClientOriginalName());
    }

    function deleteProfile(Request $data){
        DB::table('users')->where('UserId',$data->userid)->delete();
    }

    function verifyEmail(Request $data){
        DB::table('users')->where('verifyKey',$data->key)->update(['email_verified_at'=>date("Y-m-d H:i:s")]);
    }
}

