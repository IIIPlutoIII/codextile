import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutModule } from './components/layout/layout.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, LayoutModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
