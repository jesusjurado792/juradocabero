import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ClientesInterface } from '../modelos/clientes-interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private db:AngularFirestore

  ) { }
  setcliente(cliente:ClientesInterface){
    this.db.doc<ClientesInterface>(`/clientes/${cliente.correoelectronico}`).set(cliente)
    .then(()=>{

      alert("guardado")
    }).catch(error =>console.log(error.message))
  }
  login(correo: string){
    return this.db.doc<ClientesInterface>(`/clientes/${correo}`).ref.get();
  }
}
