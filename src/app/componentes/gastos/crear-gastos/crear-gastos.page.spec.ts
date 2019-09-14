import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGastosPage } from './crear-gastos.page';

describe('CrearGastosPage', () => {
  let component: CrearGastosPage;
  let fixture: ComponentFixture<CrearGastosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearGastosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
