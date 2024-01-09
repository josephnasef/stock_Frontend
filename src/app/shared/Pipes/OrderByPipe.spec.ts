import { TestBed } from '@angular/core/testing';
import { SortByPipe } from './OrderByPipe';

describe('SortByPipe', () => {
  let pipe: SortByPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SortByPipe] });
    pipe = TestBed.inject(SortByPipe);
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
