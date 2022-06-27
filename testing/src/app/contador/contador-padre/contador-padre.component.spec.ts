import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorPadreComponent } from './contador-padre.component';

describe('ContadorPadreComponent', () => {
  it('valor del contador',()=>{
    const contadorComponent = new ContadorPadreComponent();
    expect(contadorComponent.contador).toBe(12)

  })
});
