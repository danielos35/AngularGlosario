import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iva'
})
export class IvaPipe implements PipeTransform {

  transform(value: number, valorIva:number, tipoMoneda:string): string {
    return `El valor iva es de: ${(value *valorIva)} y el valor total es de ${value+(value *valorIva)} ${tipoMoneda}`
  }

}
