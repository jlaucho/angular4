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
        	"img/img_angular/image1.jpg",
        	"img/img_angular/image2.jpg",
        	"img/img_angular/image3.jpg",
        	"img/img_angular/image4.jpg",
        	"img/img_angular/image5.jpg",
        	"img/img_angular/image6.jpg",
        	"img/img_angular/image7.jpg",
        	"img/img_angular/image8.jpg",
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
