import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { ServerPagerComponent } from './server-pager.component';

describe('ServerPagerComponent', () => {
  let component: ServerPagerComponent;
  let fixture: ComponentFixture<ServerPagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ServerPagerComponent]
    });
    fixture = TestBed.createComponent(ServerPagerComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`initialPage has default value`, () => {
    expect(component.initialPage).toEqual(1);
  });

  it(`pageSize has default value`, () => {
    expect(component.pageSize).toEqual(15);
  });

  it(`maxPages has default value`, () => {
    expect(component.maxPages).toEqual(4);
  });

  it(`TotalPages has default value`, () => {
    expect(component.TotalPages).toEqual(1);
  });

  it(`CurrentPage has default value`, () => {
    expect(component.CurrentPage).toEqual(1);
  });

  describe('ngOnChanges', () => {
    it('makes expected calls', () => {
      const simpleChangesStub: SimpleChanges = <any>{};
      spyOn(component, 'setPage').and.callThrough();
      component.ngOnChanges(simpleChangesStub);
      expect(component.setPage).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'setPage').and.callThrough();
      component.ngOnInit();
      expect(component.setPage).toHaveBeenCalled();
    });
  });
});
