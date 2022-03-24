import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAvistamientoComponent } from './nuevo-avistamiento.component';

describe('NuevoAvistamientoComponent', () => {
  let component: NuevoAvistamientoComponent;
  let fixture: ComponentFixture<NuevoAvistamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAvistamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAvistamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
