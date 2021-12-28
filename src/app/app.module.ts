import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './vistas/login/login.component';
import { ProveedoresComponent } from './vistas/proveedores/proveedores.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './servicios/auth.service';
import { ProveedoresFormComponent } from './vistas/proveedores/proveedores-form/proveedores-form.component';
import { UsuariosFormComponent } from './vistas/usuarios/usuarios-form/usuarios-form.component';

const routes:Routes=[
  {path:'', component:LoginComponent},
  {path:'proveedores', component:ProveedoresComponent},
  {
    path:'inicio', 
    component:SidebarComponent,
    children:[
      {path:'usuarios', component:UsuariosComponent},
      {path:'proveedores', component:ProveedoresComponent},
      {path:'proveedoresForm', component:ProveedoresFormComponent},
      {path:'usuariosForm', component:UsuariosFormComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ProveedoresComponent,
    ProveedoresFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
