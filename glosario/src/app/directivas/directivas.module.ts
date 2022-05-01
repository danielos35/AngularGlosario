import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FondoDirective } from './fondo.directive';
import { PruebasdirectivasComponent } from './pruebasdirectivas/pruebasdirectivas.component';
import { DirectivaDinamicaDirective } from './directiva-dinamica.directive';



@NgModule({
  declarations: [
    // Las directivas deben deser llamadas dentro de las declaraciones
    FondoDirective,
    PruebasdirectivasComponent,
    DirectivaDinamicaDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FondoDirective,
    PruebasdirectivasComponent, 
    DirectivaDinamicaDirective
  ]
})
export class DirectivasModule { }
