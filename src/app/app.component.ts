import { Component } from '@angular/core';
import { SidenavService } from './shared/components/nav/side-nav.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="min-h-full">
      <mat-sidenav-container class="bg-slate-800">
        <mat-sidenav
          *ngIf="md$ | async"
          #sidenav
          class="bg-slate-600"
          [opened]="togglesidenav()"
          mode="over"
        >
          <app-side-nav></app-side-nav>
        </mat-sidenav>
        <div class="min-h-screen">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-container>
    </div>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  constructor(private sidenavService: SidenavService) {}

  togglesidenav = () => this.sidenavService.getSideNav;

  md$ = this.sidenavService.md$;
}
