import { Injectable } from '@angular/core';
import { datosArreglo } from '../interface/datos.arreglo';

@Injectable()
export class ManualService {
  // En los app.module esto debe ser importado dentro de los providers

  datosArreglo: Array<datosArreglo> = [
    { nombre: 'Daniel', apellido: 'Márquez' },
    { nombre: 'Felipe', apellido: 'Alvarez' },
    { nombre: 'Márquez', apellido: 'Test' },
  ];
}
