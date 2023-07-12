import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, MaterialModule, RouterLinkActive, RouterLink],
  exports: [NavComponent, MaterialModule],
})
export class SharedModule {}
