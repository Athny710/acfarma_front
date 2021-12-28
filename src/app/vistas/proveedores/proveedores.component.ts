import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import 'datatables.net';
import 'datatables.net-bs4';

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

  constructor() { }

  ngOnInit() {
    table()
  }

}
