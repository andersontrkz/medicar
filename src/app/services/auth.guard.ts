import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
  
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(): boolean | Promise<boolean> {
    var isAuthenticated = this.authenticationService.getAuthenticationStatus();
    if (!isAuthenticated) {
        this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }
}
