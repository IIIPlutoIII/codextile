import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-layout></app-layout>
    <router-outlet></router-outlet> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'codextile';
}
