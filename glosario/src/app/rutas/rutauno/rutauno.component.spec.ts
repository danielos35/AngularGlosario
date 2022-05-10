import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaunoComponent } from './rutauno.component';

describe('RutaunoComponent', () => {
  let component: RutaunoComponent;
  let fixture: ComponentFixture<RutaunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
