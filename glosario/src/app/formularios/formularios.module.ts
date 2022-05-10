import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormulariosReactivosComponent],
  imports: [
    CommonModule,

    // Para el uso de formularios reactivos, debemos hacer uso del reactive Form Module
    ReactiveFormsModule,

    // Para el uso de rutas debemos de utilizar el RouterModule
    RouterModule
  ],
  exports: [FormulariosReactivosComponent],
})
export class FormulariosModule {}
