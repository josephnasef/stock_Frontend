import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../../../Config/app-settings.service';
import { AuthService } from '../../Services/auth.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    const translateServiceStub = () => ({ use: lang => ({}) });
    const appConfigStub = () => ({ load: () => ({ then: () => ({}) }) });
    const authServiceStub = () => ({
      GetCurrentUser: () => ({}),
      isLoggedInMawhiba: () => ({}),
      isAuthenticated: () => ({}),
      logout: logOutUrl => ({}),
      login: loginUrl => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeaderComponent],
      providers: [
        { provide: TranslateService, useFactory: translateServiceStub },
        { provide: AppConfig, useFactory: appConfigStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`UserLoaded has default value`, () => {
    expect(component.UserLoaded).toEqual(false);
  });

  describe('changeLang', () => {
    it('makes expected calls', () => {
      const translateServiceStub: TranslateService = fixture.debugElement.injector.get(
        TranslateService
      );
      spyOn(translateServiceStub, 'use').and.callThrough();
      component.changeLang();
      expect(translateServiceStub.use).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'logout').and.callThrough();
      component.logout();
      expect(authServiceStub.logout).toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'login').and.callThrough();
      component.login();
      expect(authServiceStub.login).toHaveBeenCalled();
    });
  });

  describe('logoutCheck', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'logout').and.callThrough();
      component.logoutCheck();
      expect(authServiceStub.logout).toHaveBeenCalled();
    });
  });
});
