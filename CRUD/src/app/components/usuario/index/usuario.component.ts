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

}
