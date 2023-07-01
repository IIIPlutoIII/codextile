import { Component } from '@angular/core';

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
  listLinks = ['Hardware', 'Software', 'Math'];
}
