import { Component, ViewChild } from '@angular/core';
import { SidenavService } from './side-nav.service';

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
  constructor(private sidenavService: SidenavService) {}

  togglesidenav = () => this.sidenavService.toggleSideNav();

  listLinks = [
    { name: 'Home', Routerlink: '/f/s' },
    { name: 'Hardware', Routerlink: '/f/s/hardware' },
    { name: 'Software', Routerlink: '/f/s/software' },
    { name: 'Math', Routerlink: '/f/editor' },
    { name: 'About', Routerlink: '/f' },
  ];
}
