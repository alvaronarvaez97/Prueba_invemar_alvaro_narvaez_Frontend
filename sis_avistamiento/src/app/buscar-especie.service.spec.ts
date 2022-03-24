import { TestBed } from '@angular/core/testing';

import { BuscarEspecieService } from './buscar-especie.service';

describe('BuscarEspecieService', () => {
  let service: BuscarEspecieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarEspecieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
