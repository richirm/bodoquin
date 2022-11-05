import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosNaturalesComponent } from './productos-naturales.component';

describe('ProductosNaturalesComponent', () => {
  let component: ProductosNaturalesComponent;
  let fixture: ComponentFixture<ProductosNaturalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosNaturalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosNaturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
