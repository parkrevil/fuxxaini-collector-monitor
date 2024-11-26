import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard').then(m => m.DashboardComponent),
  },
  {
    path: 'monitor',
    loadComponent: () => import('./pages/monitor').then(m => m.MonitorComponent),
  },
  {
    path: 'log',
    loadChildren: () => import('./log/log.routes').then(m => m.routes),
  },
];
