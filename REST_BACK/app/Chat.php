<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    protected $table = 'chats';
    protected $fillable = [
    	'mensaje','user_id', 'created_at'
    ];

    public function r_user(){
        	return $this->belongsTo('App\User','user_id', 'id');
        }
}
