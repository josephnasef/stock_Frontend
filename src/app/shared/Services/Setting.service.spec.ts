import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { reqShiftTypesDTO } from 'src/app/admin/Models/ResShiftTypesDTO';
import { reqShiftTypesUpdateDTO } from 'src/app/admin/Models/ResShiftTypesDTO';
import { SettingService } from './Setting.service';

describe('SettingService', () => {
  let service: SettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SettingService]
    });
    service = TestBed.inject(SettingService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('AddShiftType', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const reqShiftTypesDTOStub: reqShiftTypesDTO = <any>{};
      service.AddShiftType(reqShiftTypesDTOStub).subscribe(res => {
        expect(res).toEqual(reqShiftTypesDTOStub);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('POST');
      req.flush(reqShiftTypesDTOStub);
      httpTestingController.verify();
    });
  });

  describe('UpdateShiftType', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const reqShiftTypesUpdateDTOStub: reqShiftTypesUpdateDTO = <any>{};
      service.UpdateShiftType(reqShiftTypesUpdateDTOStub).subscribe(res => {
        expect(res).toEqual(reqShiftTypesUpdateDTOStub);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('POST');
      req.flush(reqShiftTypesUpdateDTOStub);
      httpTestingController.verify();
    });
  });

  describe('IsAutoApprove', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.IsAutoApprove().subscribe(res => {
        expect(res).toEqual();
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      req.flush();
      httpTestingController.verify();
    });
  });

  describe('GetAllShiftType', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.GetAllShiftType().subscribe(res => {
        expect(res).toEqual();
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      req.flush();
      httpTestingController.verify();
    });
  });
});
