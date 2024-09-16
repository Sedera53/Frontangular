import { TestBed } from '@angular/core/testing';

import { CodetypService } from './codetyp.service';

describe('CodetypService', () => {
  let service: CodetypService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodetypService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
