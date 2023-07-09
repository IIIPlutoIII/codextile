import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const featuresRoutes: Routes = [
  {
    path: 's',
    loadChildren: () =>
      import('./sectors/sectors.module').then((m) => m.SectorsModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(featuresRoutes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
