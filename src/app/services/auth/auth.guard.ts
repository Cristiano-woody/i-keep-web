import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router()
  const token = window.localStorage.getItem('auth_token');
  if(!token) {
    router.navigate(['/login']);
    return false
  }
  return true;
};
