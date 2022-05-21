import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VigilateGuard implements CanActivate {
  constructor(private router: Router) {}

  redireccionar(estaLogeado: boolean) {
    if (!estaLogeado) this.router.navigate(['/']);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Si NO está logeado
    let estaLogeado: boolean = false;
    this.redireccionar(estaLogeado);
    return estaLogeado;
  }
}
