<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    protected $table 		= 'imagens';
    protected $primaryKey 	= 'id';
    protected $fillable 	= [
    	'title', 'descriptions' , 'thumbnail' , 'imageLink', 'user_id'
    ];
    /**
     *
     * Relation of de table
     * @return Collection type table
     *
     */
    public function r_user()
      {
        return $this->belongsTo('App\User', 'user_id', 'id');
      }
    
}
