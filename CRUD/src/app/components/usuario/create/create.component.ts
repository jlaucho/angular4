import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  usuario:any = {
    name: "",
    apellido: "",
    email:"",
    F_nacimiento:""
  };
  visibleClave:boolean;
  constructor( private http: Http,
               private _usuarioService: UsuarioService) {
                  this.visibleClave = true;
               }

  ngOnInit() {
  }
  guardarUsuario(){
    return this._usuarioService.guardarUsuario( this.usuario )
            .subscribe( resp =>{
                console.log(resp.status)
            })
  }

}
