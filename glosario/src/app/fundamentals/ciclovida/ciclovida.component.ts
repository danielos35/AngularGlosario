import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ciclovida',
  templateUrl: './ciclovida.component.html',
  styleUrls: ['./ciclovida.component.scss'],
})
export class CiclovidaComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  datosCambiantes: string = '';

  // ORDEN DE EJECUCIÓN

  // 1.
  constructor() {}

  // 2. Solo se ejecuta cuando dentro del comoponente se tiene un @Input, ver componente onchenges para conocer un ejemplo
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes');
  }

  //3. Los metodos con Init hacen referencia a que van a ser ejecutados una unica vez.
  ngOnInit(): void {
    console.log('On init');
  }

  // 4.
  ngDoCheck(): void {
    console.log('Do check.');
  }

  // 5. Despues de cargarse todo el contenido
  ngAfterContentInit(): void {
    console.log('afeter content init.');
  }

  ngAfterContentChecked(): void {
    console.log('after contet check.');
  }

  // 6. Despues de que la vista se ha inicializado
  ngAfterViewInit(): void {
    console.log('After view init.');
  }

  ngAfterViewChecked(): void {
    console.log('After view checked.');
  }

  // Se ejecuta cuando se salga del componente, se usa para evitar fuga de memoria
  ngOnDestroy(): void {
    console.log('On destroy');
  }
}
