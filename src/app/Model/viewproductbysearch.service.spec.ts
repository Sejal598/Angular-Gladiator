import { TestBed } from '@angular/core/testing';

import { ViewproductbysearchService } from './viewproductbysearch.service';

describe('ViewproductbysearchService', () => {
  let service: ViewproductbysearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewproductbysearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
