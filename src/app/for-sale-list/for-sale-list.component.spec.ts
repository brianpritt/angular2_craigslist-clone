/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForSaleListComponent } from './for-sale-list.component';

describe('ForSaleListComponent', () => {
  let component: ForSaleListComponent;
  let fixture: ComponentFixture<ForSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
