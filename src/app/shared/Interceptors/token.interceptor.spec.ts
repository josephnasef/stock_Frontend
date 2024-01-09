import { TestBed } from "@angular/core/testing";
import { HttpHandler } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { TokenInterceptor } from "./token.interceptor";

describe("TokenInterceptor", () => {
  let service: TokenInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TokenInterceptor] });
    service = TestBed.inject(TokenInterceptor);
  });

  it("can load instance", () => {
    expect(service).toBeTruthy();
  });

  describe("intercept", () => {
    it("makes expected calls", () => {
      const httpHandlerStub: HttpHandler = <any>{};
      const httpRequestStub: HttpRequest = <any>{};
      spyOn(httpHandlerStub, "handle").and.callThrough();
      spyOn(httpRequestStub, "clone").and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpHandlerStub.handle).toHaveBeenCalled();
      expect(httpRequestStub.clone).toHaveBeenCalled();
    });
  });
});
