import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from '../service/firestore.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
entrar:FormGroup;
  constructor(
    private db:FirestoreService,
    private fb:FormBuilder, 
    private router:Router)
   {this.entrar=fb.group({correo:[],contrasena:[]}) }

  ngOnInit(): void {
  }
  onSubmint(){this.db.login(this.prop['correo'].value).then( m=> {
    let data = m.data();
    console.log(data)
    if(data?.contrasena == this.prop['contrasena'].value){
alert('Bienvenido');
this.router.navigate([''])
    }else{
      alert('Acceso denegado');
    }
  });}
  get prop(): { [key: string]: AbstractControl}{
    return this.entrar.controls
  }
}
