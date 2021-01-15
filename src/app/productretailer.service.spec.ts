import { TestBed } from '@angular/core/testing';

import { ProductretailerService } from './productretailer.service';

describe('ProductretailerService', () => {
  let service: ProductretailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductretailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
