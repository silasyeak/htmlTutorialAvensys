import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { secondgGuard } from './secondg.guard';

describe('secondgGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => secondgGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
