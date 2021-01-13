import { TestBed } from '@angular/core/testing';

import { MobileupdateService } from './mobileupdate.service';

describe('MobileupdateService', () => {
  let service: MobileupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
