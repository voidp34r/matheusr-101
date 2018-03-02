// Import the angular router
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthService } from './_services/auth.service';
// Import the angular router
import { HomeComponent } from './components/home/home/home.component';
import { MeComponent } from './components/me/me/me.component';
import { UsersComponent } from './components/users/users/users.component';
import { ConsoleComponent } from './components/console/console/console.component';
import { ErrorComponent } from './components/error/error/error.component';
import { ApiComponent } from './components/api/api/api.component';

const appRoutes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    data: { title: 'home' }
  },
  {
    path: 'me',
    pathMatch: 'full',
    component: MeComponent,
    // canActivate: [ AuthGuardService ],
    data: { title: 'me' }
  },
  {
    path: 'console',
    pathMatch: 'full',
    component: ConsoleComponent,
    data: { title: 'console' }
  },
  {
    path: 'api',
    loadChildren: 'app/components/component.module#ComponentModule'
  },
  {
    path: 'error',
    pathMatch: 'full',
    component: ErrorComponent,
    data: { title: 'error' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
