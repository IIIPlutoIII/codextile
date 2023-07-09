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

  toggle = () => this.sidenavService.toggleSideNav();

  listLinks = ['Hardware', 'Software', 'Math'];
}
