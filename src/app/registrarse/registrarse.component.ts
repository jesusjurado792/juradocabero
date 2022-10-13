import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirestoreService } from '../service/firestore.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
registrarse:FormGroup

  constructor(
  
    private db:FirestoreService,
    private fb:FormBuilder

    ) {
      this.registrarse=this.fb.group({
        nombre:["hola"],
        correoelectronico:[],
        contrasena:[],
        telefono:[]
      })
     }

  ngOnInit(): void {
  }
submint(){
  this.db.setcliente((this.registrarse.value))
}
}
