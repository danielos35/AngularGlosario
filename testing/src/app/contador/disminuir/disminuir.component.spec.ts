import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisminuirComponent } from './disminuir.component';

describe('DisminuirComponent', () => {
  let component: DisminuirComponent;
  let fixture: ComponentFixture<DisminuirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisminuirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisminuirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
