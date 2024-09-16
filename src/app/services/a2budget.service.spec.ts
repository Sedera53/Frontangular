import { TestBed } from '@angular/core/testing';

import { A2budgetService } from './a2budget.service';

describe('A2budgetService', () => {
  let service: A2budgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A2budgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
