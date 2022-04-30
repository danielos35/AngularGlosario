import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APipesnativosComponent } from './a-pipesnativos/a-pipesnativos.component';
import { BPipescustomsComponent } from './b-pipescustoms/b-pipescustoms.component';
import { modoOscuroPipe } from '../shared/pipesCustom/modoOscuro.pipe';
import { IvaPipe } from '../shared/pipesCustom/iva.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    APipesnativosComponent,
    BPipescustomsComponent, 

    // Los custom pipes deben de ser llamados desde las declaraciones, 
    modoOscuroPipe,
    IvaPipe
    

  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports:[
    APipesnativosComponent, 
    BPipescustomsComponent
  ]
})
export class PipesModule { }
