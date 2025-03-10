import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const getToken= localStorage.getItem("Token");
  const cloneReq=req.clone({
    setHeaders:{
      Authorization: `Bearer ${getToken}`
    }
  })
  return next(cloneReq);
};
