import { RouterModule, Routes } from '@angular/router';

// COMPONENTES
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/login/register.component';
import { NofoundComponent } from './shared/nofound/nofound.component';


// En este caso se usan rutas de archivos hijos que se encuentran dentro de pages para
// permitir gestionar el LogIn en una página superior
// Router-Outlet (Padre) --> Router-Outlet (Hijo) --> Etc.
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NofoundComponent } // cualquier ruta no definida mostrara el componente definido
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });

// RouterModule --> Requiere importacion en imports (APP_ROUTES) del app.module.ts

// TODO EL CODIGO SE PUEDE GENERAR DE FORMA MANUAL

// Para usarlo en app.component.ts es necesario incluir el <router-outlet>
