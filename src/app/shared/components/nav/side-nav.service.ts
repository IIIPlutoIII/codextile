import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private _sideNav: boolean = false;

  public set setSideNav(sidenav: boolean) {
    this._sideNav = sidenav;
  }
  public get getSideNav(): boolean {
    return this._sideNav;
  }
  toggleSideNav() {
    if (!this._sideNav) {
      this._sideNav = true;
    } else {
      this._sideNav = false;
    }
  }

  media(query: string): Observable<boolean> {
    const mediaQuery = window.matchMedia(query);
    return fromEvent<MediaQueryList>(mediaQuery, 'change').pipe(
      startWith(mediaQuery),
      map((list: MediaQueryList) => list.matches)
    );
  }

  md$ = this.media(`(max-width: 768px)`);

  // sm$ = media(`(max-width: 767px)`);
  // md$ = media(`(min-width: 768px) and (max-width: 1023px)`);
  // lg$ = media(`(min-width: 1024px) and (max-width: 1279px)`);
  // xl$ = media(`(min-width: 1280px) and (max-width: 1535px)`);
  // xl2$ = media(`(min-width: 1536px)`);
}
