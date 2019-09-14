import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosVeringresosPage } from './ahorros-veringresos.page';

describe('AhorrosVeringresosPage', () => {
  let component: AhorrosVeringresosPage;
  let fixture: ComponentFixture<AhorrosVeringresosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrosVeringresosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosVeringresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
