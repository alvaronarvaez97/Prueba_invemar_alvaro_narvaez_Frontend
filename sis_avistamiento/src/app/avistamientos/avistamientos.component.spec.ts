import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvistamientosComponent } from './avistamientos.component';

describe('AvistamientosComponent', () => {
  let component: AvistamientosComponent;
  let fixture: ComponentFixture<AvistamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvistamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvistamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
