import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RightDashboardComponent } from './RightDashboard.component';

describe('RightDashboardComponent', () => {
  let component: RightDashboardComponent;
  let fixture: ComponentFixture<RightDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RightDashboardComponent]
    });
    fixture = TestBed.createComponent(RightDashboardComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
