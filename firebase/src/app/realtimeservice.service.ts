import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealtimeserviceService {

  // llamamos nuestro modulo Http
  constructor(private httpClient:HttpClient){}


  guardarDato(dato:any){
    // La URL debe de terminar con datos.json como primer argumento, y como segundo el dato que quiera se almacenado
    this.httpClient.post('https://angular-99b0c-default-rtdb.firebaseio.com/datos.json',dato).subscribe(

      Response=>{
        console.log('Datos guardados'+Response  )
        
      },

      error =>{
        console.log('No se han podido guardar');
        
      }
    )
  }

}
