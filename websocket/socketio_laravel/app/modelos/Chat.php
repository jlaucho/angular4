<?php

namespace App\modelos;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    protected $table 			  = 'chats';
    protected $primaryKey 	= 'id';
    protected $fillable 		= [
    	'id', 'mensaje' , 'user_id' 
    ];
    /**
     *
     * relation of Table
     *
     */
    public function r_user()
      {
        return $this->belongsTo('App\User', 'user_id', 'id');
      }
    
}
