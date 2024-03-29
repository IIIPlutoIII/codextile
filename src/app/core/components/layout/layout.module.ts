import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageContainerComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
