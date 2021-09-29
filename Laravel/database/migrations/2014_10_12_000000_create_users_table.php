<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('UserId');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->date('birthday');
            $table->enum('sex', ['m', 'f', 'o']);
            $table->string('preference');
            $table->string('area');
            $table->string('verifyKey');
            $table->string('intro','500');
            $table->date('minAge');
            $table->date('maxAge');
            $table->timestamp('matchesChecked')->default(date("Y-m-d h:i:s"));
            $table->rememberToken();
            $table->timestamps();  
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
