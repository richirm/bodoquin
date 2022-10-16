import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerreteriaDetalleComponent } from './ferreteria-detalle.component';

describe('FerreteriaDetalleComponent', () => {
  let component: FerreteriaDetalleComponent;
  let fixture: ComponentFixture<FerreteriaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerreteriaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerreteriaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
