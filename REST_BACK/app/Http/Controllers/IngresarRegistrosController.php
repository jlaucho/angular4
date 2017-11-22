<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imagen;
use Faker\Factory as Faker;

class IngresarRegistrosController extends Controller
{
    public function registroImagenes()
    {
    	
    	$faker = Faker::create();
    	//dd('estamos en el registro de imagenes');
    	$imageLinks = array(
        	"img/img_angular/imagen1.jpg",
        	"img/img_angular/imagen2.jpg",
        	"img/img_angular/imagen3.jpg",
        	"img/img_angular/imagen4.jpg",
        	"img/img_angular/imagen5.jpg",
        	"img/img_angular/imagen6.jpg",
        	"img/img_angular/imagen7.jpg",
        	"img/img_angular/imagen8.jpg",
        );

    	foreach ($imageLinks as $key => $imageLink) {
    		$img = new Imagen();
    		# code...
	    	$img->title				= $faker->text(80);
	    	$img->descriptions= $faker->paragraph(18);
	    	$img->thumbnail		= '.jpg';
	    	$img->imageLink		= $imageLink.'-1.jpg';
	    	$img->user_id			= $faker->numberBetween($min = 1, $max = 5);

	    	$img->save();
    	}
    }
}
