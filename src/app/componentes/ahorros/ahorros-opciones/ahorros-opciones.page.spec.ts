import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosOpcionesPage } from './ahorros-opciones.page';

describe('AhorrosOpcionesPage', () => {
  let component: AhorrosOpcionesPage;
  let fixture: ComponentFixture<AhorrosOpcionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrosOpcionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosOpcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
