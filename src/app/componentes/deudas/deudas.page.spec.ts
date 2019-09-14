import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudasPage } from './deudas.page';

describe('DeudasPage', () => {
  let component: DeudasPage;
  let fixture: ComponentFixture<DeudasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeudasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeudasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
