import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerIngresosPage } from './ver-ingresos.page';

describe('VerIngresosPage', () => {
  let component: VerIngresosPage;
  let fixture: ComponentFixture<VerIngresosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerIngresosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerIngresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
