import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-a-pipesnativos',
  templateUrl: './a-pipesnativos.component.html',
  styleUrls: ['./a-pipesnativos.component.scss'],
})
export class APipesnativosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // PIPES TEXTO:

  // Entrada.
  texto: string = 'Hola MuNdO';
  numericos: number = 7.12;
  porcentaje: number = 0.36;
  dinero: number = 12000;

  // Crear fecha

  fecha = Date.now();
  // Transformar en lowercase en el HTML los datos siguen teniendo el mismo formato.

  // JSON
  obJSON: object = {
    nombre: 'Daniel',
    apellido: 'Márquez',
  };

  // SLICE
  // Mostrar string o array

  paises: Array<string> = ['Colombia', 'Alemania', 'Brasil', 'Peru'];
  capitalColombia: string = 'Bogota';

  //i18nSelect
  genero: string = 'q';
  mensaje: {} = {
    m: 'Bienvenido',
    w: 'Bienvenida',
    // valor por defecto
    other: 'No sabemos quien eres'
  };



  // i18nPlural

  notificacion:number = 0;
  
  notificaciones = {
    "=0":'Sin notificaciones', 
    "=1":'Tienes # notificación',

    // Con el # se presenta el numero de notificaciones. 

    "other": `Tienes # notificaciones` 
  }
  
  sumarNotificaciones(){
    this.notificacion++
  }


  // Crear promesa
  img = new Promise((resolve, reject)=>{
    resolve('https://angular.io/assets/images/logos/angular/logo-nav@2x.png')
  })
}


