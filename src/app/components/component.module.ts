import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../layout/material.module';
import { ComponentsRoutingModule } from './components-routing.module';

import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './error/error/error.component';
import { ConsoleComponent } from './console/console/console.component';
import { MainComponent } from './main/main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { ContentComponent } from './main/content/content.component';
import { FooterComponent } from './main/footer/footer.component';
import { MeComponent } from './me/me/me.component';
import { UsersComponent } from './users/users/users.component';
import { ApiComponent } from './api/api/api.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserComponent } from './users/user/user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { IdComponent } from './users/id/id.component';
import { ToolbarComponent } from './main/toolbar/toolbar.component';
import { HttpService } from '../core/http.service';
import { LoaderService } from '../core/loader/loader.service';
import { httpServiceFactory } from '../_factories/http-service.factory';
import { XHRBackend, RequestOptions } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    ComponentsRoutingModule
  ],
  exports: [
    HomeComponent,
    ErrorComponent,
    ConsoleComponent,
    MainComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MeComponent,
    UsersComponent,
    UserlistComponent,
    ApiComponent,
    UserComponent,
    UserDetailsComponent,
    IdComponent,
    ToolbarComponent

  ],
  declarations: [
    HomeComponent,
    ErrorComponent,
    ConsoleComponent,
    MainComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MeComponent,
    UsersComponent,
    UserlistComponent,
    ApiComponent,
    UserComponent,
    UserDetailsComponent,
    IdComponent,
    ToolbarComponent
  ],
  providers: [
    HttpService,
    LoaderService,
    {
      provide: HttpService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions, LoaderService]
    },
  ]
})
export class ComponentModule { }
