import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[dire-dinamica]'
})
export class DirectivaDinamicaDirective implements OnInit {

  @Input() color:string = 'green';
  @Input() ancho:string = '100px';
  @Input() alto:string = '100px';
  @Input() display:string = 'flex';

  
  elemento:ElementRef<HTMLDivElement>;

  constructor(private element:ElementRef<HTMLDivElement>){
    this.elemento = element;
  }

  ngOnInit(): void {
    this.configurarfondo(); 
    this.tamaño();
  }

  configurarfondo(){
    this.elemento.nativeElement.style.backgroundColor = this.color
  }

  tamaño(){
    this.elemento.nativeElement.style.display  = this.display;
    this.elemento.nativeElement.style.height  = this.alto;
    this.elemento.nativeElement.style.width  = this.ancho;
  }
}
