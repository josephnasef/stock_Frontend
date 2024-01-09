import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';
import { OnlyNumberDirective } from './only-number.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div appOnlyNumber>Default</div>
  `
})
class TestComponent {}

describe('OnlyNumberDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    const elementRefStub = () => ({});
    TestBed.configureTestingModule({
      declarations: [OnlyNumberDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(OnlyNumberDirective)
    );
    bareElement = fixture.debugElement.query(By.css(':not([appOnlyNumber])'));
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });
});
