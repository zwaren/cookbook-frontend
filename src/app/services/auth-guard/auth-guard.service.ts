import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate(): boolean {
    if (!this.auth.loggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

  constructor(public auth: AuthService, public router: Router) { }
}
