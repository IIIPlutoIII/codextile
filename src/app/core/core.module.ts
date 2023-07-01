import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutModule } from './components/layout/layout.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, LayoutModule],
  exports: [LayoutModule],
})
export class CoreModule {}
