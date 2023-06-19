import { CanDeactivateFn } from '@angular/router';
import { ProductComponent } from './product/product.component';

export const deactiveGuard: CanDeactivateFn<ProductComponent> = (component:ProductComponent, currentRoute, currentState, nextState) => {

if(component.isAllowed){
  return window.confirm("are you sure")
}
else{
  return false
}
  ;
};
