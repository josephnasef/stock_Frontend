import { TestBed } from "@angular/core/testing";
import { HttpHandler } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HeaderInterceptor } from "./header.interceptor";

describe("HeaderInterceptor", () => {
  let service: HeaderInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HeaderInterceptor] });
    service = TestBed.inject(HeaderInterceptor);
  });

  it("can load instance", () => {
    expect(service).toBeTruthy();
  });

  describe("intercept", () => {
    it("makes expected calls", () => {
      const httpHandlerStub: HttpHandler = <any>{};
      const httpRequestStub: HttpRequest = <any>{};
      spyOn(component, "addAuthToken").and.callThrough();
      spyOn(httpHandlerStub, "handle").and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(service.addAuthToken).toHaveBeenCalled();
      expect(httpHandlerStub.handle).toHaveBeenCalled();
    });
  });

  describe("addAuthToken", () => {
    it("makes expected calls", () => {
      const httpRequestStub: HttpRequest = <any>{};
      spyOn(httpRequestStub, "clone").and.callThrough();
      service.addAuthToken(httpRequestStub);
      expect(httpRequestStub.clone).toHaveBeenCalled();
    });
  });
});
