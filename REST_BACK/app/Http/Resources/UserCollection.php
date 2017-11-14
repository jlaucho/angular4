<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'    => $this->id,
            'name'  => $this->name,
            'apell' => $this->apellido,
            'email' => $this->email,
            'F_nacimiento'=>$this->F_nacimiento,
        ];
        /*return parent::toArray($request);*/
    }
}
