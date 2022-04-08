import { Component, OnInit } from '@angular/core';


// Para creación de Formularios importamos las siguientes librerias
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  // Las librerias deben de ser inicializadas en el constructor

  constructor(public constructorFormulario:FormBuilder) { }

  ngOnInit(): void {

  this.iniciarFormulario()

  }


  // a. Creamos nuestro formulario de tipo FormGroup
  formulario:FormGroup;

  // b. Lo inicializamos mediante una función
  iniciarFormulario(){
    this.formulario = this.constructorFormulario.group(
      {
        nombre:[''], 
        apellido:[''],
        edad:[], 
        telefono:[''],

      }
    )
  }


}
