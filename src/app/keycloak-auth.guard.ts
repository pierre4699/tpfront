import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class KeycloakAuthGuardService extends KeycloakAuthGuard {
  constructor(protected readonly keycloak: KeycloakService) {
    // @ts-ignore
    super(keycloak);
  }
  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (!this.authenticated) {
        await this.keycloak.login({
          redirectUri: window.location.origin + state.url,
        });
        return reject(false);
      }

      const requiredRoles = route.data['roles'];
      if (!requiredRoles || requiredRoles.length === 0) {
        return resolve(true);
      } else {
        if (this.roles.some((r) => requiredRoles.includes(r))) {
          return resolve(true);
        } else {
          return reject(false);
        }
      }
    });
  }
}


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private keycloak: KeycloakService, private keycloakAuthGuard: KeycloakAuthGuardService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (!await this.keycloak.isLoggedIn()) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }
    return this.keycloakAuthGuard.canActivate(route, state);
  }
}
