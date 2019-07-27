import { TestBed, inject } from '@angular/core/testing';

import { PlanTypeService } from './plan-type.service';

describe('PlanTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanTypeService]
    });
  });

  it('should be created', inject([PlanTypeService], (service: PlanTypeService) => {
    expect(service).toBeTruthy();
  }));
});
