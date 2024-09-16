import { TestBed } from '@angular/core/testing';

import { CodebenefService } from './codebenef.service';

describe('CodebenefService', () => {
  let service: CodebenefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodebenefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
