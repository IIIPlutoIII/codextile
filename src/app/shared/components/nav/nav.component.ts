import { Component, OnDestroy, ViewChild } from '@angular/core';
import { SidenavService } from './side-nav.service';
import { fromEvent, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

// interface ILink {
//   isMenu: boolean;
//   name: string;
// }

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
})
export class NavComponent {
  constructor(
    private sidenavService: SidenavService,
    public auth: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  togglesidenav = () => this.sidenavService.toggleSideNav();

  listLinks = [
    { name: 'Home', Routerlink: '/f/s/home' },
    { name: 'Hardware', Routerlink: '/f/s/hardware' },
    { name: 'Software', Routerlink: '/f/s/software' },
    { name: 'Math', Routerlink: '/f/editor' },
    { name: 'About', Routerlink: '/f/s/about' },
  ];

  md$ = this.sidenavService.md$;

  async logout($event: Event) {
    $event.preventDefault();

    await this.afAuth.signOut();
  }
}
