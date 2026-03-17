import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { HistoriasComponent } from './pages/historias/historias.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'historias', component: HistoriasComponent},
  { path: '**', redirectTo: '' },
];
