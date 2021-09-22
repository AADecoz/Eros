<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
//        User::truncate();

        $faker = \Faker\Factory::create();

        // Let's make sure everyone has the same password and
        // let's hash it before the loop, or else our seeder
        // will be too slow.
        $password = Hash::make('cupido');


        // And now let's generate a few dozen users for our app:
        for ($i = 0; $i < 10; $i++) {
            $datum = $faker->date;
            User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => $password,
                'birthday' => $datum,
                'sex' => 'm',
                'preference' => 'm',
                'area' => $faker->city,
                'intro' => $faker->paragraph,
                'minAge' => date('Y-m-d',strtotime($datum.' + 20 year')),
                'maxAge' => date('Y-m-d',strtotime($datum.' - 20 year')),
            ]);
        }
    }


}
