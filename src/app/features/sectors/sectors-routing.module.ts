import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HardwareComponent } from './pages/hardware/hardware.component';
import { SoftwareComponent } from './pages/software/software.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SectorsComponent } from './sectors.component';

const sectorsRoutes: Routes = [
  {
    path: '',
    component: SectorsComponent,
  },
  {
    path: 'hardware',
    component: HardwareComponent,
  },
  {
    path: 'software',
    component: SoftwareComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(sectorsRoutes)],
  exports: [RouterModule],
})
export class SectorsRoutingModule {}
