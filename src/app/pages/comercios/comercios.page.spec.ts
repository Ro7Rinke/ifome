import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerciosPage } from './comercios.page';

describe('ComerciosPage', () => {
  let component: ComerciosPage;
  let fixture: ComponentFixture<ComerciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComerciosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComerciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
