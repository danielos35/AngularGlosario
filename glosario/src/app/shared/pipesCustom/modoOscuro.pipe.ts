// NOTAS IMPORTANTES
    // Los custom pipes deben de ser llamados desde las declaraciones, 


// Decorador pipe

import { Pipe, PipeTransform } from "@angular/core";

// Confirguración del pipe
@Pipe({
    name:'modoOscuro',
}) 

export class modoOscuroPipe implements PipeTransform{
    
    transform(value:boolean) {

        return value?'dark':'ligth'
    }

}