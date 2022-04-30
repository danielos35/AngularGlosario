import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipesService {

  esOscuro:boolean = false;
  
  constructor(){}

  cambiarModo(){
    this.esOscuro = !this.esOscuro;
  }
}
