import { Directive, ElementRef, OnInit } from '@angular/core';

// Las directivas deben de ser agregadas también en la parte de las declaraciones

@Directive({

  // NObre de la directiva
  selector: '[cambiarEstilo]'
})
export class FondoDirective implements OnInit{
  
  // Se recomienda implenatar el ngOnInit 
  ngOnInit(): void {
      this.cambiarFondo();
      this.cambiarColorLetra();
  }
  
  private divElemento:ElementRef<HTMLDivElement>;
  
  // Insertamos el element ref
  constructor(private eleDiv:ElementRef<HTMLDivElement>){
    this.divElemento = eleDiv;
   }


  cambiarFondo(){
    this.divElemento.nativeElement.style.backgroundColor = 'red'
  }
  
  cambiarColorLetra(){
    this.divElemento.nativeElement.style.color = 'blue'
  }

}
