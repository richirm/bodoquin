import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosServiciosComponent } from './videojuegos-servicios.component';

describe('VideojuegosServiciosComponent', () => {
  let component: VideojuegosServiciosComponent;
  let fixture: ComponentFixture<VideojuegosServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegosServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
