import { CanActivateFn } from '@angular/router';

export const secondgGuard: CanActivateFn = (route, state) => {
  return true;
};
