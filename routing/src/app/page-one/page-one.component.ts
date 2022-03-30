import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  datosQueryParams:string = '';

  // 1. Para recibir datos desde la URL debemos de inyectar en nuestro constructor el servicio 
  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(): void {
  // 2. Asignar datos de la URL 
  this.datosDesdeHome = this.ruta.snapshot.params['dato'];


  // Asignamos Query Paramas
  this.datosQueryParams = this.ruta.snapshot.queryParams['query']; 
  console.log(this.datosQueryParams);
  

  }

  datosDesdeHome:string = ''; 

}
