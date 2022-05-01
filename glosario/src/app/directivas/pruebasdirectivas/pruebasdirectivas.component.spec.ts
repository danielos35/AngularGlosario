import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasdirectivasComponent } from './pruebasdirectivas.component';

describe('PruebasdirectivasComponent', () => {
  let component: PruebasdirectivasComponent;
  let fixture: ComponentFixture<PruebasdirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasdirectivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasdirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
