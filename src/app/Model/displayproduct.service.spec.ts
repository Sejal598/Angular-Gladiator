import { TestBed } from '@angular/core/testing';

import { DisplayproductService } from './displayproduct.service';

describe('DisplayproductService', () => {
  let service: DisplayproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
