import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APipesnativosComponent } from './a-pipesnativos.component';

describe('APipesnativosComponent', () => {
  let component: APipesnativosComponent;
  let fixture: ComponentFixture<APipesnativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APipesnativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APipesnativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
