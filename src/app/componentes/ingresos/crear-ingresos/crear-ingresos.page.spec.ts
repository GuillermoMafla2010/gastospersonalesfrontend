import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIngresosPage } from './crear-ingresos.page';

describe('CrearIngresosPage', () => {
  let component: CrearIngresosPage;
  let fixture: ComponentFixture<CrearIngresosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearIngresosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearIngresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
