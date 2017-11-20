import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuarios:any;

  constructor( private _usuarioService: UsuarioService ) {
    this._usuarioService.getUsuarios().subscribe( data =>{
      this.usuarios = data;
      console.log(data);
    })
  }

  ngOnInit() {
  }
  eliminar( idx:number, position:number ){
    console.log('la posiacion es '+ position);
    this._usuarioService.eliminarUsuario( idx )
        .subscribe( resp =>{
          if( resp.status == 200 ){
            console.log('objeto original');
            console.log(this.usuarios);
            console.log('objeto recortado');
            delete this.usuarios[ position ];
            console.log(this.usuarios);
          }
        });
  }
}
