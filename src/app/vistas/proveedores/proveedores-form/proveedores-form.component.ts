import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores-form',
  templateUrl: './proveedores-form.component.html',
  styleUrls: ['./proveedores-form.component.css']
})
export class ProveedoresFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public proveedores(){
    this.router.navigate(['inicio/proveedores']);
  }
}
