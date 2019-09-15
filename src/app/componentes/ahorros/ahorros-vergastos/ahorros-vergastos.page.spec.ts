import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosVergastosPage } from './ahorros-vergastos.page';

describe('AhorrosVergastosPage', () => {
  let component: AhorrosVergastosPage;
  let fixture: ComponentFixture<AhorrosVergastosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrosVergastosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosVergastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
