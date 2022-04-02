import { Component, OnInit } from '@angular/core';
import { RealtimeserviceService } from '../realtimeservice.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit {


  // Inyectamos servicio para poder guardar datos
  constructor( public servicio:RealtimeserviceService){}

  ngOnInit(): void {
  }

  datos:string ='';
  consulta:any = ''; 

  guardar(datos:string){
    let data = [datos]
    this.servicio.guardarDato(data)
  }


  actualizar(dato:string){
    let data = [dato];
    this.servicio.ActualizarDato(data)
  }


  verUltimoDato(){
  this.servicio.traerEmpleados().subscribe( respuesta=>{
    console.log(respuesta);
    
  })
  }
}
