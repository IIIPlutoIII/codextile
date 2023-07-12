import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
