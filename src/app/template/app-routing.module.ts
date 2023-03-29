import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: 'public',
    data: {
      layout: 'empty',
    },
    loadChildren: () =>
      import('../pages/public/public.module').then((m) => m.PublicModule),
  },
  { path: '**', redirectTo: 'public/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
