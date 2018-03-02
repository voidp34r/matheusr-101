import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { UsersComponent } from './users/users/users.component';
import { ApiComponent } from './api/api/api.component';
import { UserComponent } from './users/user/user.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { IdComponent } from './users/id/id.component';

const ComponentsRoutes: Routes = [
  {
    path: 'api',
    component: ApiComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
        children: [
          {
            path: 'id',
            component: IdComponent
          },
          {
            path: ':id',
            component: IdComponent
          }
        ]
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ComponentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule { }
