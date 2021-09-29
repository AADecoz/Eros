<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

/**
 * Class User
 * 
 * @property int $UserId
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property Carbon $birthday
 * @property string $sex
 * @property string $preference
 * @property string $area
 * @property string $intro
 * @property Carbon $minAge
 * @property Carbon $maxAge
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|Matching[] $matchings
 *
 * @package App\Models
 */
class User extends Model
{
	use Notifiable;
	protected $table = 'users';
	protected $primaryKey = 'UserId';

	protected $dates = [
		'email_verified_at',
		'birthday',
		'minAge',
		'maxAge',
		
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
		'name',
		'email',
		'email_verified_at',
		'password',
		'birthday',
		'sex',
		'preference',
		'area',
		'intro',
		'minAge',
		'maxAge',
		'remember_token',
		'verifyKey'
	];

	public function matchings()
	{
		return $this->hasMany(Matching::class, 'UserId');
	}
}
