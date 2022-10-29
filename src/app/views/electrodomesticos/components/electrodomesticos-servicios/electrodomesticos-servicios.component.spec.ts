import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodomesticosServiciosComponent } from './electrodomesticos-servicios.component';

describe('ElectrodomesticosServiciosComponent', () => {
  let component: ElectrodomesticosServiciosComponent;
  let fixture: ComponentFixture<ElectrodomesticosServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectrodomesticosServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrodomesticosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
