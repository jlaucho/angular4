<?php

use Illuminate\Database\Seeder;
use App\Imagen;
use Faker\Factory as Faker;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $imageLinks = array(
          "".asset('img/img_angular/')."",
          "".asset('img/img_angular/')."",
          "".asset('img/img_angular/')."",
          "".asset('img/img_angular/')."",
          "".asset('img/img_angular/')."",
          "".asset('img/img_angular/')."",
          "".asset('img/img_angular/')."",
          "".asset('img/img_angular/')."",
        );

        foreach ($imageLinks as $imageLink) 
        {
          Imagen::create([
            'title'       = $faker->text(80),
            'descriptions'= $faker->paragraph(18),
            'thumbnail'   = '.jpg',
            'imageLink'   = $imageLink.'-1.jpg',
            'user_id'     = $faker->numberBetween($min = 1, $max = 5),
          ]);
        }
    }
}
