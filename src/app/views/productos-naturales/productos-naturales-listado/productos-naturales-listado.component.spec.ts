import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosNaturalesListadoComponent } from './productos-naturales-listado.component';

describe('ProductosNaturalesListadoComponent', () => {
  let component: ProductosNaturalesListadoComponent;
  let fixture: ComponentFixture<ProductosNaturalesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosNaturalesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosNaturalesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
