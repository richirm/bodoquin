import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosNaturalesDetalleComponent } from './productos-naturales-detalle.component';

describe('ProductosNaturalesDetalleComponent', () => {
  let component: ProductosNaturalesDetalleComponent;
  let fixture: ComponentFixture<ProductosNaturalesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosNaturalesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosNaturalesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
