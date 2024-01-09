import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { LoginDTO } from '../Models/LoginDTO';
import { RegistrationDTO } from '../Models/registrationDTO';
import { AccountsService } from './Accounts.service';

describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountsService]
    });
    service = TestBed.inject(AccountsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('Login', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const loginDTOStub: LoginDTO = <any>{};
      service.Login(loginDTOStub).subscribe(res => {
        expect(res).toEqual(loginDTOStub);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('POST');
      req.flush(loginDTOStub);
      httpTestingController.verify();
    });
  });

  describe('Register', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const registrationDTOStub: RegistrationDTO = <any>{};
      service.Register(registrationDTOStub).subscribe(res => {
        expect(res).toEqual(registrationDTOStub);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('POST');
      req.flush(registrationDTOStub);
      httpTestingController.verify();
    });
  });
});
