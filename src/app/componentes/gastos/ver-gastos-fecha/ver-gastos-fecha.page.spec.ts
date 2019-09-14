import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGastosFechaPage } from './ver-gastos-fecha.page';

describe('VerGastosFechaPage', () => {
  let component: VerGastosFechaPage;
  let fixture: ComponentFixture<VerGastosFechaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerGastosFechaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerGastosFechaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
