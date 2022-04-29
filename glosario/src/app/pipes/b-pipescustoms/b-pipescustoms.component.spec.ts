import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPipescustomsComponent } from './b-pipescustoms.component';

describe('BPipescustomsComponent', () => {
  let component: BPipescustomsComponent;
  let fixture: ComponentFixture<BPipescustomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPipescustomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPipescustomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
