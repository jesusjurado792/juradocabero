import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"contactanos", component: ContactanosComponent},
  {path:"info", component:InformacionComponent},
  {path:"register", component:RegistrarseComponent},
  {path:"entrar", component:EntrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
