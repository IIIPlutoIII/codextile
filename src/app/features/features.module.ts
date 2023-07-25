import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,

    // Material Module
    MatSidenavModule,
    SharedModule,
  ],
})
export class FeaturesModule {}
