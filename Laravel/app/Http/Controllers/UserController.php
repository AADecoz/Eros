<?php

namespace App\Http\Controllers;

use http\Message;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'birthday' => $data['birthday'],
            'sex'  => $data['sex'],
            'preference' => $data['preference'],
            'area' => $data['area'],
            'intro' => $data['intro'],
            'minAge' => $data['minAge'],
            'maxAge' => $data['maxAge'],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $user = User::create($request->all());


       return response()->json($user, 201);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function register(request $data){
        User::create([
            'name' => $data->name,
            'email' => $data->email,
            'password' => Hash::make($data->password),
            'birthday' => $data->birthday,
            'sex'  => $data->sex,
            'preference' => $data->preference,
            'area' => $data->area,
            'intro' => $data->intro,
            'minAge' => $data->minAge,
            'maxAge' => $data->maxAge,
        ]);

        return response()->json(['message' => 'Lekker werk pik!'], 201);
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

    public function passwordVerification(request $data){
        $login = DB::table('users')
            ->where('email',"=",$data->email)
            ->first();

            if(!Hash::check($data->password,$login->password) ){
                return response()->json([ 'status_message'=>'Wrong password'], 200);
    
            } else{
                return response()->json([ 'status_message'=>'Password correct'], 200);
    
            }
    }


}
