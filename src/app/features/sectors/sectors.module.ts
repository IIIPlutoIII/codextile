import { NgModule } from '@angular/core';
import { SectorsComponent } from './sectors.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HardwareComponent } from './pages/hardware/hardware.component';
import { SoftwareComponent } from './pages/software/software.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SectorsRoutingModule } from './sectors-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SectorsComponent,
    HomeComponent,
    AboutComponent,
    HardwareComponent,
    SoftwareComponent,
  ],
  imports: [
    CommonModule,
    SectorsRoutingModule,
    // Material Module
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    SharedModule,
  ],
})
export class SectorsModule {}
