import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ConfirmationPOPComponent } from './ConfirmationPOP.component';

describe('ConfirmationPOPComponent', () => {
  let component: ConfirmationPOPComponent;
  let fixture: ComponentFixture<ConfirmationPOPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ConfirmationPOPComponent]
    });
    fixture = TestBed.createComponent(ConfirmationPOPComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
