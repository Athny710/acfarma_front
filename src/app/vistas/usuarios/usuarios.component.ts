import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import 'datatables.net';
import 'datatables.net-bs4';
import { Router } from '@angular/router';


function table(){
  ($('#mytable') as any).DataTable({
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
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(){
    table()
  }
  public usuarioForm(){
    this.router.navigate(['inicio/usuariosForm']);
  }

}
