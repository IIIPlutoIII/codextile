import { Injectable } from '@angular/core';

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
}
