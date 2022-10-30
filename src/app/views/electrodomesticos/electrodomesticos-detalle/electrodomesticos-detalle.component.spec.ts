import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodomesticosDetalleComponent } from './electrodomesticos-detalle.component';

describe('ElectrodomesticosDetalleComponent', () => {
  let component: ElectrodomesticosDetalleComponent;
  let fixture: ComponentFixture<ElectrodomesticosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectrodomesticosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrodomesticosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
