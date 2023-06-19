import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { pay2guardGuard } from './pay2guard.guard';

describe('pay2guardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pay2guardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
