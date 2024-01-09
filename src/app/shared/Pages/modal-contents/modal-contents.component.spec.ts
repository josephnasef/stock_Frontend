import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalContentsComponent } from './modal-contents.component';

describe('ModalContentsComponent', () => {
  let component: ModalContentsComponent;
  let fixture: ComponentFixture<ModalContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ModalContentsComponent]
    });
    fixture = TestBed.createComponent(ModalContentsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
