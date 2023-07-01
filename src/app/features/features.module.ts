import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { SectorsModule } from './sectors/sectors.module';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, FeaturesRoutingModule, SectorsModule],
})
export class FeaturesModule {}
