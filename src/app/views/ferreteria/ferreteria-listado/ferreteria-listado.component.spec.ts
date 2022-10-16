import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerreteriaListadoComponent } from './ferreteria-listado.component';

describe('FerreteriaListadoComponent', () => {
  let component: FerreteriaListadoComponent;
  let fixture: ComponentFixture<FerreteriaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerreteriaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerreteriaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
