import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APipesnativosComponent } from './a-pipesnativos/a-pipesnativos.component';
import { BPipescustomsComponent } from './b-pipescustoms/b-pipescustoms.component';



@NgModule({
  declarations: [
    APipesnativosComponent,
    BPipescustomsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    APipesnativosComponent, 
    BPipescustomsComponent
  ]
})
export class PipesModule { }
