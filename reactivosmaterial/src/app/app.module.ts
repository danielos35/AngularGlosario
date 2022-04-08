import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';import { MaterialModule } from './material.module';




// Formulario reactivos (ReactiveFormsModue) y FormsModule

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MatSliderModule, 

    // Importamos el modulo de material
    MaterialModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
