import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="min-h-full">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
