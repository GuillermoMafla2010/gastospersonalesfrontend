import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCuotaPage } from './ver-cuota.page';

describe('VerCuotaPage', () => {
  let component: VerCuotaPage;
  let fixture: ComponentFixture<VerCuotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCuotaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCuotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
