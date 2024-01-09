import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { UsersFromServerService } from './users-from-mawhiba.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    const cookieServiceStub = () => ({ deleteAll: (string, string1) => ({}) });
    const toastrServiceStub = () => ({});
    const usersFromServerServiceStub = () => ({ GetUSerById: userId => ({}) });
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useFactory: routerStub },
        { provide: CookieService, useFactory: cookieServiceStub },
        { provide: ToastrService, useFactory: toastrServiceStub },
        {
          provide: UsersFromServerService,
          useFactory: usersFromServerServiceStub
        }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
