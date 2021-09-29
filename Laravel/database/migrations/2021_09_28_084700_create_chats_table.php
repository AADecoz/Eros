<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chats', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('body',5000)->nullable();
            $table->timestamps(); 
            $table->foreignId('from_id')->constrained('users', 'UserId')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('to_id')->constrained('users', 'UserId')->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('chats');
    }
}
