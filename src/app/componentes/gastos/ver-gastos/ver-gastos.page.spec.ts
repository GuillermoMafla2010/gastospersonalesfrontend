import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGastosPage } from './ver-gastos.page';

describe('VerGastosPage', () => {
  let component: VerGastosPage;
  let fixture: ComponentFixture<VerGastosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerGastosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
