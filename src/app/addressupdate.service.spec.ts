import { TestBed } from '@angular/core/testing';

import { AddressupdateService } from './addressupdate.service';

describe('AddressupdateService', () => {
  let service: AddressupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
