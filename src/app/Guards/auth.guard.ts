import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authservice = inject(AuthService)
  const router = inject(Router)
  console.log("authguard", authservice.isLoggedIn())
  if(!authservice.isLoggedIn()){
    alert("Please login Properly")
    router.navigate(['/login'])
    return false;
  }

  return true;
};
