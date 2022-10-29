import { TestBed } from '@angular/core/testing';

import { ElectrodomesticosServiciosService } from './electrodomesticos-servicios.service';

describe('ElectrodomesticosServiciosService', () => {
  let service: ElectrodomesticosServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectrodomesticosServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
