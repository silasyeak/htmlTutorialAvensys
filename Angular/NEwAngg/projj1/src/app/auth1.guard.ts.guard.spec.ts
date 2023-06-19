import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { auth1GuardTsGuard } from './auth1.guard.ts.guard';

describe('auth1GuardTsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => auth1GuardTsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
