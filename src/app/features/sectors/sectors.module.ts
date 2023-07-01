import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorsComponent } from './sectors.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HardwareComponent } from './pages/hardware/hardware.component';
import { SoftwareComponent } from './pages/software/software.component';
import { SectorsRoutingModule } from './sectors-routing.module';

@NgModule({
  declarations: [
    SectorsComponent,
    HomeComponent,
    AboutComponent,
    HardwareComponent,
    SoftwareComponent,
  ],
  imports: [CommonModule, SectorsRoutingModule],
})
export class SectorsModule {}
