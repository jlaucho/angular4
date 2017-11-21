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
  visibleClave:boolean = true;
  usuario:any = {
    name: "",
    apellido: "",
    email:"",
    F_nacimiento:""
  };

  constructor( private router: Router,
               private activeRoute: ActivatedRoute,
               private _usuarioService: UsuarioService) {

      this.visibleClave = false;

      this.idUser = this.activeRoute.params.subscribe( id =>{
        this._usuarioService.getUsuario( id['id'] )
            .subscribe( resp => {
              //let idx = id['id'];
              //console.log(resp.name);
              this.usuario.name = resp.name;
              this.usuario.apellido = resp.apellido;
              this.usuario.email = resp.email;
              this.usuario.F_nacimiento = resp.F_nacimiento;
            })
      })
    }

  ngOnInit() {
  }

  guardarUsuario(){
    let idx = this.activeRoute.params.subscribe(
      id =>{
        this._usuarioService.actualizarUsuario( this.usuario, id['id'])
            .subscribe()
    });
        /*.subscribe( resp =>  {
          console.log( resp );
        })*/
  }

}
