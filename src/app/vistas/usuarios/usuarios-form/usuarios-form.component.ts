import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public usuario(){
    this.router.navigate(['inicio/usuarios']);
  }
}
