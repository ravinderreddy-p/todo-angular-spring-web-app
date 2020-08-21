import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login'])

    return false;
  }

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router
  ) { }
}
