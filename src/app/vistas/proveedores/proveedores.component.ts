import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import 'datatables.net';
import 'datatables.net-bs4';
import { Proveedor } from 'src/app/modelos/proveedor.interface';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

function table(){
  ($('#mytable2') as any).DataTable({
    responsive: true,
    autowidth: false,
    "language":{
      "lengthMenu": "Mostrar _MENU_",
      "zeroRecords": "No se han encontrado resultados",
      "info": "",
      "infoEmpty": "Sin resultados",
      "infoFiltered": "",
      "search": "Buscar",
      "paginate": {
        "next": "Sig.",
        "previous": "Ant.",
      }
    },
    columnDefs: [
      {
          targets: "_all",
          className: 'dt-body-center'
      }
    ]
  });
}

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: Proveedor[] = [];
  constructor(private service:AuthService, private router:Router) { }

  ngOnInit() {
    this.service.getproveedores().subscribe((data:any)=>{
      this.proveedores=data.proveedores;
      setTimeout(() => {
        table();
      }, 10);
    })
  }
  public proveedoresForm(){
    this.router.navigate(['inicio/proveedoresForm']);
  }

}
