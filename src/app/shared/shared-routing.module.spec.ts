import { TestBed } from '@angular/core/testing';
import { SharedRoutingModule } from './shared-routing.module';

describe('SharedRoutingModule', () => {
  let pipe: SharedRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SharedRoutingModule] });
    pipe = TestBed.inject(SharedRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
