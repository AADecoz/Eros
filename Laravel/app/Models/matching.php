<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Matching
 * 
 * @property int $id
 * @property bool $matched
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int $UserId
 * @property int $MatchId
 * 
 * @property User $user
 *
 * @package App\Models
 */
class Matching extends Model
{
	protected $table = 'matchings';

	protected $casts = [
		'matched' => 'bool',
		'UserId' => 'int',
		'MatchId' => 'int'
	];

	protected $fillable = [
		'matched',
		'UserId',
		'MatchId'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'UserId');
	}
}
