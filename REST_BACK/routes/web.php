<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
include_once(base_path('routes/web2.php'));
//Route::resource('user', 'UserController');

Route::get('registroImagenes',[
	'uses'	=>'IngresarRegistrosController@registroImagenes',
	'as'		=>'ingresar.imagenes'
]);
