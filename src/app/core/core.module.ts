// >> Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { XHRBackend, RequestOptions } from '@angular/http';
// import { SharedModule } from '../modules/shared/shared.module';
import { MaterialModule } from '../layout/material.module';


// >> Services
import { HttpService } from './http.service';
import { httpServiceFactory } from '../_factories/http-service.factory';
import { DefaultRequestOptions } from './default.options';
import { LoaderService } from './loader/loader.service';
// import { LoggerService } from '../services/service/logger.service';

// >> Components
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
    // SharedModule,
  ],
  exports: [
    LoaderComponent,
    MaterialModule
  ],
  declarations: [
    LoaderComponent
  ],
  providers: [
    // LoaderService, {provide: HttpService, useFactory: httpServiceFactory, deps: [XHRBackend, RequestOptions, LoaderService]}
    // LoggerService
  ]
})

export class CoreModule { }
