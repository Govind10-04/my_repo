import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  
  // const router=inject(Router); 
  //  debugger;
  //  const localData=localStorage.getItem("userLoginDetails");
  //  if(localData !=null){
  //    return true;

  //  }else{
  //     router.navigateByUrl("login")  
  //      return false;
  //  }

  const router = inject(Router);
   debugger;
  // Check if running in the browser
  if (typeof window !== 'undefined') {
    const localData = localStorage.getItem('userLoginDetails');
    if (localData !== null) {
      return true;
    } else {
      router.navigateByUrl('login');
      return false;
    }
  }

  // If running in SSR, prevent access
  return false;

};
