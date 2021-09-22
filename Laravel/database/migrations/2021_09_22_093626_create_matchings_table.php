<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMatchingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('matchings')) {
            Schema::create('matchings', function (Blueprint $table) {
                $table->id();
                $table->boolean('matched');
                $table->timestamps();
                $table->engine = 'InnoDB';
            });
        }

        Schema::table('matchings', function (Blueprint $table){
            $table->foreignId('UserId')->constrained('users', 'UserId')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('MatchId')->constrained('users', 'UserId')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('matchings');
    }
}
