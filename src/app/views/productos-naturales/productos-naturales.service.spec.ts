import { TestBed } from '@angular/core/testing';

import { ProductosNaturalesService } from './productos-naturales.service';

describe('ProductosNaturalesService', () => {
  let service: ProductosNaturalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosNaturalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
