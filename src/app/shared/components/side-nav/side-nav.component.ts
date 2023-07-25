import { Component } from '@angular/core';
import { SidenavService } from '../nav/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  constructor(private sidenavService: SidenavService) {}
  listLinks = [
    { name: 'Home', Routerlink: '/f/s/home' },
    { name: 'Hardware', Routerlink: '/f/s/hardware' },
    { name: 'Software', Routerlink: '/f/s/software' },
    { name: 'Math', Routerlink: '/f/editor' },
    { name: 'About', Routerlink: '/f/s/about' },
  ];

  md$ = this.sidenavService.md$;
}
