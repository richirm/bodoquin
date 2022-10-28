import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodomesticosListadoComponent } from './electrodomesticos-listado.component';

describe('ElectrodomesticosListadoComponent', () => {
  let component: ElectrodomesticosListadoComponent;
  let fixture: ComponentFixture<ElectrodomesticosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectrodomesticosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrodomesticosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
