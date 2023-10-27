import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router()
  const token = window.localStorage.getItem('authToken');
  const userId = window.localStorage.getItem('userId');
  if(!token || !userId) {
    router.navigate(['/login']);
    return false
  }
  return true;
};
