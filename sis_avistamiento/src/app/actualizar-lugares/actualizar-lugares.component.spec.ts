import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarLugaresComponent } from './actualizar-lugares.component';

describe('ActualizarLugaresComponent', () => {
  let component: ActualizarLugaresComponent;
  let fixture: ComponentFixture<ActualizarLugaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarLugaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
