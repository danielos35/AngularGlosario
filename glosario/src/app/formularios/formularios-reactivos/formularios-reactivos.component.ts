import { Component, OnInit } from '@angular/core';
// Agrupadores
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
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

    // Arreglos
    listado: this.fb.array([]),
  });

  // Asociar controladores independiente......

  tecnologias: FormControl = this.fb.control('', [Validators.required]);
  ngOnInit(): void {}

  // Validar si formulario es invalido y fue tocado
  validar() {
    return this.miFormulario.invalid && this.miFormulario.touched;
  }

  
  // Obtener elementos para agregar a la lista
  get elemento(){
    return this.miFormulario.get('listado') as FormArray
  }
  // Agregar elementos a la lista 
  agregarElemento(){
    this.elemento.push(this.fb.control(this.tecnologias.value))
    console.log(this.tecnologias.value);
    this.miFormulario.disable();
    this.miFormulario.reset();
    
  }
}
