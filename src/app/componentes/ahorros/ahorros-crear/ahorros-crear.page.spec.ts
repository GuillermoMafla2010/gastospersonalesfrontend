import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosCrearPage } from './ahorros-crear.page';

describe('AhorrosCrearPage', () => {
  let component: AhorrosCrearPage;
  let fixture: ComponentFixture<AhorrosCrearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrosCrearPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
