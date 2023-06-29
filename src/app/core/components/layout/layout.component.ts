import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <app-page-container></app-page-container>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class LayoutComponent {}
