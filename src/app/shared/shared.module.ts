import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [NavComponent, SideNavComponent],
  imports: [CommonModule, MaterialModule, RouterLinkActive, RouterLink],
  exports: [NavComponent, SideNavComponent, MaterialModule],
})
export class SharedModule {}
