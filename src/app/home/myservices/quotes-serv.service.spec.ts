import { TestBed } from '@angular/core/testing';

import { QuotesServService } from './quotes-serv.service';

describe('QuotesServService', () => {
  let service: QuotesServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotesServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
