import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list/1',
  },
  {
    path: 'list',
    pathMatch: 'full',
    redirectTo: 'list/1',
  },
  {
    path: 'list/:page',
    loadComponent: () => import('./pages/list/list.component').then(m => m.ListComponent),
  },
];
