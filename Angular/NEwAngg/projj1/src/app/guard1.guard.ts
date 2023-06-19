import { CanActivateFn } from '@angular/router';

export const guard1Guard: CanActivateFn = (route, state) => {




  if(20>10){
    return true
  }else{
    return false;
  }
  
};
