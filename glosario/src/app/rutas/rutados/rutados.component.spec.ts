import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutadosComponent } from './rutados.component';

describe('RutadosComponent', () => {
  let component: RutadosComponent;
  let fixture: ComponentFixture<RutadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
