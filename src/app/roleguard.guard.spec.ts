import { TestBed, async, inject } from '@angular/core/testing';

import { RoleguardGuard } from './roleguard.guard';

describe('RoleguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleguardGuard]
    });
  });

  it('should ...', inject([RoleguardGuard], (guard: RoleguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
