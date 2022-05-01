import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumComponent } from './enum/enum.component';



@NgModule({
  declarations: [
    EnumComponent
  ],
  imports: [
    CommonModule
  ], exports:[
    EnumComponent
  ]
})
export class TipodatoModule { }
