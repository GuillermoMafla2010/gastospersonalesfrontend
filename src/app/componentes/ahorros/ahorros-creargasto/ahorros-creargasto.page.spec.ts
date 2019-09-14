import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosCreargastoPage } from './ahorros-creargasto.page';

describe('AhorrosCreargastoPage', () => {
  let component: AhorrosCreargastoPage;
  let fixture: ComponentFixture<AhorrosCreargastoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrosCreargastoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosCreargastoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
