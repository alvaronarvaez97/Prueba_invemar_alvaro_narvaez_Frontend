import { TestBed } from '@angular/core/testing';

import { NuevoAvistamientoService } from './nuevo-avistamiento.service';

describe('NuevoAvistamientoService', () => {
  let service: NuevoAvistamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoAvistamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
