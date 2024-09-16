import { TestBed } from '@angular/core/testing';

import { Validationa2budgetService } from './validationa2budget.service';

describe('Validationa2budgetService', () => {
  let service: Validationa2budgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Validationa2budgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
