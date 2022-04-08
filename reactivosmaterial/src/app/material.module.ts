import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// MATERIAL

// Debemos importar las dependencias indicadas en angular material indicadas en el Api
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';








@NgModule({
  declarations: [],
  imports: [
    CommonModule,


  ], 
  exports:[

           // Materials
           MatButtonModule,
           MatProgressBarModule, 
           MatIconModule, 
           MatDividerModule,
           MatToolbarModule, 
           MatCardModule, 
           MatInputModule, 
           MatGridListModule
           
  ]
})
export class MaterialModule { }
