import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APipesnativosComponent } from './a-pipesnativos/a-pipesnativos.component';



@NgModule({
  declarations: [
    APipesnativosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    APipesnativosComponent
  ]
})
export class PipesModule { }
