import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XHRBackend, RequestOptions } from '@angular/http';

// Importando o core do app
import { CoreModule } from './core/core.module';
// import { MaterialModule } from './layout/material.module'; // já dentro do core
import { ComponentModule } from './components/component.module';
// Importando components do app
import { AppComponent } from './app.component';

// >> Import dos modulos do firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment.prod';

// Importando services do app
import { httpServiceFactory } from './_factories/http-service.factory';
import { HttpService } from './core/http.service';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guard/auth.guard';
import { LoaderService } from './core/loader/loader.service';

// >> Routers
import { AppRoutingModule } from './app-routes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ComponentModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
  ],
  exports: [
    ComponentModule,
    CoreModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFireAuth,
    HttpService,
    LoaderService,
    {
      provide: HttpService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions, LoaderService]
    },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
