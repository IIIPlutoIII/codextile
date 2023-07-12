import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';

const featuresRoutes: Routes = [
  { path: '', component: FeaturesComponent },
  {
    path: 's',
    loadChildren: () =>
      import('./sectors/sectors.module').then((m) => m.SectorsModule),
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('./editor/editor.module').then((m) => m.EditorModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(featuresRoutes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
