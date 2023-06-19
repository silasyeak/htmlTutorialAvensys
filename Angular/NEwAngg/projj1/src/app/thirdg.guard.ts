import { CanActivateChildFn } from '@angular/router';

export const thirdgGuard: CanActivateChildFn = (childRoute, state) => {
  return false;
};
