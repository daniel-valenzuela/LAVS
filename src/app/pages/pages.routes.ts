import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // { path: 'progress', component: ProgressComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
];

// En las rutas se utiliza forChild debido a que ya no corresponde al router principal sino
// a uno secundario
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
