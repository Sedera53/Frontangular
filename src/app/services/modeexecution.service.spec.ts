import { TestBed } from '@angular/core/testing';

import { ModeexecutionService } from './modeexecution.service';

describe('ModeexecutionService', () => {
  let service: ModeexecutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeexecutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
