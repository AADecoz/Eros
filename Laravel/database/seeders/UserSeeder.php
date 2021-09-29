<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's clear the users table first
      DB::statement('SET FOREIGN_KEY_CHECKS=0');
      User::truncate();

        $faker = \Faker\Factory::create();

        // Let's make sure everyone has the same password and
        // let's hash it before the loop, or else our seeder
        // will be too slow.
        $password = Hash::make('cupido');

        $sexOptions=["m","f","o"];
        $preferenceOptions=["m","f","o","mf","mo","fo","mfo"];
        // And now let's generate a few dozen users for our app:

 
            User::create([
                'name' => "Aphrodite Ourania",
                'email' => 'aphrodite@olympos.gr',
                'password' => $password,
                'birthday' => "1985-01-01",
                'sex' => 'f',
                'preference' => 'm',
                'area' => 'Olympus',
                'verifyKey'=>'1',
                'intro' => 'If you are in search of love or searching for beauty, you have found her F0 9F 98 98 I was born from the heavens and risen from the foam of the sea, after Ouranus was castrated by his son Cronus. Trying to find some excitement after Zeus married me against my will. Make your sacrifice to me and maybe I will let you experience true pleasure F0 9F 98 8F like no aphrodisiac would',
                'minAge' =>"2000-01-01" ,
                'maxAge' =>"1950-01-01" ,'email_verified_at'=>date("Y-m-d H:i:s"),'verifyKey'=>'1',
            ]);

            User::create([
                'name' => "Glaukopis Athena",
                'email' => 'athena@olympos.gr',
                'password' => $password,
                'birthday' => "1990-01-01",
                'sex' => 'f',
                'preference' => 'm',
                'area' => 'Olympus',
                'intro' => 'Looking for a deep connection. I come from a complicated family. I was born from my fathers head after his fear caused him to trick my mother to turn herself into a fly so he could swallow her. After her death my father has had many partners and lovers. Even though I remain his favourite child, I am searching for a partner I can depend upon F0 9F 98 89',
                'minAge' =>"2000-01-01" ,
                'maxAge' =>"1950-01-01" ,'verifyKey'=>'1','email_verified_at'=>date("Y-m-d H:i:s")
            ]);

            
            User::create([
                'name' => "Hephaestus Amphigýeis",
                'email' => 'hephaestus@olympos.gr',
                'password' => $password,
                'birthday' => "1985-01-01",
                'sex' => 'm',
                'preference' => 'f',
                'area' => 'Olympus',
                'intro' => "Do you want to see something hot ? Cast away by mother and thrown down mount Olympus by Zeus. I have gotten my revenge on my mother by capturing her after being exiled. After my failed relationships, I am now searching for beauty and passion that goes with my arts. Make an offering to me and I will make you magnificent jewellery. Don't worry I won't put it in a box",
                'minAge' =>"2000-01-01" ,
                'maxAge' =>"1950-01-01" ,'verifyKey'=>'1','email_verified_at'=>date("Y-m-d H:i:s")
            ]);
            
                   
            User::create([
                'name' => "Dionysos",
                'email' => 'bakchos@olympos.gr',
                'password' => $password,
                'birthday' => "1985-01-01",
                'sex' => 'm',
                'preference' => 'm',
                'area' => 'Olympus',
                'intro' => "Born out of the thigh of my father, Zeus, after my mother Semele died. Proven myself to be worthy of being on Olympus by conquering the world with wine and triumphing over death. Live to party. Very extrovert and outgoing. Great love for art, poetry and can beat you at any drinking competition. I can give you the courage you need. If you make a peace offering to me I will tell you what your future brings",
                'minAge' =>"2000-01-01" ,
                'maxAge' =>"1950-01-01" ,'verifyKey'=>'1','email_verified_at'=>date("Y-m-d H:i:s")
            ]);

            User::create([
                'name' => "Poseidon",
                'email' => 'poseidon@olympos.gr',
                'password' => $password,
                'birthday' => "1985-01-01",
                'sex' => 'm',
                'preference' => 'f',
                'area' => 'Atlantis',
                'intro' => "My mother Rhea saved me from my father by hiding me in a flock of lambs and telling him she gave birth to a horse. Having had many lovers and children I promise to be a good lover to you. I deny all allegations of rape made against me. If you swipe left I might throw an island on top of you, like I did with Polybotes",
                'minAge' =>"2000-01-01" ,
                'maxAge' =>"1950-01-01" ,'verifyKey'=>'1','email_verified_at'=>date("Y-m-d H:i:s")
            ]);

            User::create([
                'name' => "Ares",
                'email' => 'ares@olympos.gr',
                'password' => $password,
                'birthday' => "1985-01-01",
                'sex' => 'm',
                'preference' => 'f',
                'area' => 'Olympus',
                'intro' => "Feared and hated by both Gods and men.",
                'minAge' =>"2000-01-01" ,
                'maxAge' =>"1950-01-01" ,'verifyKey'=>'1','email_verified_at'=>date("Y-m-d H:i:s")
            ]);

            User::create([
                'name' => "Hermes",
                'email' => 'hermes@olympos.gr',
                'password' => $password,
                'birthday' => "1990-01-01",
                'sex' => 'm',
                'preference' => 'f',
                'area' => 'Olympus',
                'intro' => "Feared and hated by both Gods and men.",
                'minAge' =>"2000-01-01" ,
                'maxAge' =>"1950-01-01" ,'verifyKey'=>'1',
                'email_verified_at'=>date("Y-m-d H:i:s")
            ]);

        
        
         
        for ($i = 0; $i < 100; $i++) {
            $datum = $faker->date;
            while($datum> date('2003-01-01')){
                $datum = $faker->date;
            }
            
            User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => hash::make('cupido'),
                'birthday' => $datum,
                'sex' => $sexOptions[array_rand($sexOptions,1)],
                'preference' => $preferenceOptions[array_rand($preferenceOptions,1)],
                'area' => $faker->city,
                'intro' => $faker->paragraph,
                'minAge' => date('Y-m-d',strtotime($datum.' + 20 year')),
                'maxAge' => date('Y-m-d',strtotime($datum.' - 20 year')),'verifyKey'=>'1','email_verified_at'=>date("Y-m-d H:i:s")
            ]);
        }
    }




}
