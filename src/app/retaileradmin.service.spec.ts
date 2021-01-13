import { TestBed } from '@angular/core/testing';

import { RetaileradminService } from './retaileradmin.service';

describe('RetaileradminService', () => {
  let service: RetaileradminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetaileradminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
