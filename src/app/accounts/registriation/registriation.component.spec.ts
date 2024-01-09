import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from 'src/app/shared/Services/Accounts.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistriationComponent } from './registriation.component';

describe('RegistriationComponent', () => {
  let component: RegistriationComponent;
  let fixture: ComponentFixture<RegistriationComponent>;

  beforeEach(() => {
    const untypedFormBuilderStub = () => ({ group: object => ({}) });
    const routerStub = () => ({ navigate: array => ({}) });
    const translateServiceStub = () => ({ instant: string => ({}) });
    const ngxSpinnerServiceStub = () => ({
      show: () => ({}),
      hide: () => ({})
    });
    const toastrServiceStub = () => ({ error: (arg, arg2) => ({}) });
    const accountsServiceStub = () => ({ Register: value => ({}) });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegistriationComponent],
      providers: [
        { provide: UntypedFormBuilder, useFactory: untypedFormBuilderStub },
        { provide: Router, useFactory: routerStub },
        { provide: TranslateService, useFactory: translateServiceStub },
        { provide: NgxSpinnerService, useFactory: ngxSpinnerServiceStub },
        { provide: ToastrService, useFactory: toastrServiceStub },
        { provide: AccountsService, useFactory: accountsServiceStub }
      ]
    });
    fixture = TestBed.createComponent(RegistriationComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`IsValid has default value`, () => {
    expect(component.IsValid).toEqual(true);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'initForm').and.callThrough();
      component.ngOnInit();
      expect(component.initForm).toHaveBeenCalled();
    });
  });

  describe('initForm', () => {
    it('makes expected calls', () => {
      const untypedFormBuilderStub: UntypedFormBuilder = fixture.debugElement.injector.get(
        UntypedFormBuilder
      );
      spyOn(untypedFormBuilderStub, 'group').and.callThrough();
      component.initForm();
      expect(untypedFormBuilderStub.group).toHaveBeenCalled();
    });
  });

  describe('submit', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const translateServiceStub: TranslateService = fixture.debugElement.injector.get(
        TranslateService
      );
      const ngxSpinnerServiceStub: NgxSpinnerService = fixture.debugElement.injector.get(
        NgxSpinnerService
      );
      const toastrServiceStub: ToastrService = fixture.debugElement.injector.get(
        ToastrService
      );
      const accountsServiceStub: AccountsService = fixture.debugElement.injector.get(
        AccountsService
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(translateServiceStub, 'instant').and.callThrough();
      spyOn(ngxSpinnerServiceStub, 'show').and.callThrough();
      spyOn(ngxSpinnerServiceStub, 'hide').and.callThrough();
      spyOn(toastrServiceStub, 'error').and.callThrough();
      spyOn(accountsServiceStub, 'Register').and.callThrough();
      component.submit();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(translateServiceStub.instant).toHaveBeenCalled();
      expect(ngxSpinnerServiceStub.show).toHaveBeenCalled();
      expect(ngxSpinnerServiceStub.hide).toHaveBeenCalled();
      expect(toastrServiceStub.error).toHaveBeenCalled();
      expect(accountsServiceStub.Register).toHaveBeenCalled();
    });
  });
});
