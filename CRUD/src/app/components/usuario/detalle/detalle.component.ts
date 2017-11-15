import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  idUser:any;
  usuario:any = {
    name: "",
    apellido: "",
    email:"",
    F_nacimiento:""
  };

  constructor( private router: Router,
               private activeRoute: ActivatedRoute,
               private _usuarioService: UsuarioService) {

      this.idUser = this.activeRoute.params.subscribe( id =>{
        this._usuarioService.getUsuario( id['id'] )
            .subscribe( resp => {
              let idx = id['id'];
              console.log(idx);
              this.usuario.name = resp[(idx - 1)].name;
              this.usuario.apellido = resp[(idx - 1)].apellido;
              this.usuario.email = resp[(idx - 1)].email;
              this.usuario.F_nacimiento = resp[(idx - 1)].F_nacimiento;
            })
      })
    }

  ngOnInit() {
  }

  guardarUsuario(){
    console.log(this.usuario)
  }

}
