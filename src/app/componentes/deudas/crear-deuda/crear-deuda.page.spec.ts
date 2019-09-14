import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDeudaPage } from './crear-deuda.page';

describe('CrearDeudaPage', () => {
  let component: CrearDeudaPage;
  let fixture: ComponentFixture<CrearDeudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDeudaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDeudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
