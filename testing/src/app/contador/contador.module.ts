import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorPadreComponent } from './contador-padre/contador-padre.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DisminuirComponent } from './disminuir/disminuir.component';



@NgModule({
  declarations: [
    ContadorPadreComponent,
    AgregarComponent,
    DisminuirComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContadorModule { }
