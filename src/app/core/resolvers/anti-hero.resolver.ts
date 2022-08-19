import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AntiHeroResolver implements Resolve<Array<string>> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<string>> {
    return of(["seiji", "test"]);
  }
}
