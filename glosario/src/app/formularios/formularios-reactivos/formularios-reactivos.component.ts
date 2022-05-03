import { Component, OnInit } from '@angular/core';
// Agrupadores
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrls: ['./formularios-reactivos.component.scss'],
})
export class FormulariosReactivosComponent implements OnInit {
  // FORMA 1 ... (NO recomendada)
  // miFormulario:FormGroup = new FormGroup({
  //   nombre: new FormControl(''),
  //   apellido: new FormControl(''),
  //   numeroTelefono: new FormControl(' '),
  //   edad: new FormControl(''),
  //   peso: new FormControl(' '),
  // })

  // FORMA 2 .... (Recomendada);
  //1. inyectar servicio en el constructor
  constructor(private fb: FormBuilder) {}
  // 2. crear Formulario


  miFormulario: FormGroup = this.fb.group({

    // 1. Primer argumento valor por defecto.
    // 2. Segundo argumento validaciones sincronas
    // 3. Validaciones asincronas

    nombre: ['Hola Mundo'],
    apellido: ['Hola Apellido', [Validators.required, Validators.maxLength(2)]],
    telefono: [123],
    edad: [321],
    peso: [123],
  });

  ngOnInit(): void {}
}
