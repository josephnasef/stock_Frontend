import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './SafePipe';

describe('SafePipe', () => {
  let pipe: SafePipe;

  beforeEach(() => {
    const domSanitizerStub = () => ({
      bypassSecurityTrustResourceUrl: url => ({})
    });
    TestBed.configureTestingModule({
      providers: [
        SafePipe,
        { provide: DomSanitizer, useFactory: domSanitizerStub }
      ]
    });
    pipe = TestBed.inject(SafePipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms X to Y', () => {
    const value: any = 'X';
    const args: string[] = [];
    expect(pipe.transform(value, args)).toEqual('Y');
  });
});
