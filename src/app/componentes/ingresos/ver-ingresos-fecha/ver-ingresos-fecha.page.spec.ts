import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerIngresosFechaPage } from './ver-ingresos-fecha.page';

describe('VerIngresosFechaPage', () => {
  let component: VerIngresosFechaPage;
  let fixture: ComponentFixture<VerIngresosFechaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerIngresosFechaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerIngresosFechaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
