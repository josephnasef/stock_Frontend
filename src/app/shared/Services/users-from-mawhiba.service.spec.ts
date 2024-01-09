import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UsersFromServerService } from './users-from-mawhiba.service';

describe('UsersFromServerService', () => {
  let service: UsersFromServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersFromServerService]
    });
    service = TestBed.inject(UsersFromServerService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
