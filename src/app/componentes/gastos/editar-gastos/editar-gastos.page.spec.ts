import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGastosPage } from './editar-gastos.page';

describe('EditarGastosPage', () => {
  let component: EditarGastosPage;
  let fixture: ComponentFixture<EditarGastosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarGastosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
