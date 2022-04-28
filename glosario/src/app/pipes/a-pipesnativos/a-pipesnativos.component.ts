import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-pipesnativos',
  templateUrl: './a-pipesnativos.component.html',
  styleUrls: ['./a-pipesnativos.component.scss']
})
export class APipesnativosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  // PIPES TEXTO: 
  
    // Entrada. 
    texto:string = 'Hola MuNdO';
    numericos:number = 7.12
    porcentaje:number = 0.36;
    dinero:number = 12000; 

    // Crear fecha

    fecha = Date.now();
    // Transformar en lowercase en el HTML los datos siguen teniendo el mismo formato.

    

  

}


