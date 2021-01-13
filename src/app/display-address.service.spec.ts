import { TestBed } from '@angular/core/testing';

import { DisplayAddressService } from './display-address.service';

describe('DisplayAddressService', () => {
  let service: DisplayAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
