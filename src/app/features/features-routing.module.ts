import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const featuresRoutes: Routes = [
  {
    path: 'sectors',
    loadChildren: () =>
      import('./sectors/sectors.module').then((m) => m.SectorsModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full', // >>>>ToCheck?
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
