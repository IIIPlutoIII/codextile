import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { PageContainerComponent } from './page-container/page-container.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    PageContainerComponent,
  ],
  imports: [CommonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
