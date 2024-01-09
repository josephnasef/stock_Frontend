import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModelDialogComponent } from './model-dialog.component';

describe('ModelDialogComponent', () => {
  let component: ModelDialogComponent;
  let fixture: ComponentFixture<ModelDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ModelDialogComponent]
    });
    fixture = TestBed.createComponent(ModelDialogComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`_isClosed has default value`, () => {
    expect(component._isClosed).toEqual(false);
  });
});
