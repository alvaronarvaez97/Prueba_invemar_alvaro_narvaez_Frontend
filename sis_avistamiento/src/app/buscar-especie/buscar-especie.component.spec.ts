import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEspecieComponent } from './buscar-especie.component';

describe('BuscarEspecieComponent', () => {
  let component: BuscarEspecieComponent;
  let fixture: ComponentFixture<BuscarEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEspecieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
