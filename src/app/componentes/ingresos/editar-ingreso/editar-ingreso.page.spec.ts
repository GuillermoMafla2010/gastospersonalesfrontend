import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarIngresoPage } from './editar-ingreso.page';

describe('EditarIngresoPage', () => {
  let component: EditarIngresoPage;
  let fixture: ComponentFixture<EditarIngresoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarIngresoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarIngresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
