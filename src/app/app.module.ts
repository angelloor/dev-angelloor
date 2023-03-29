import { DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ThemeServiceService } from './services/theme-service.service';
import { TemplateModule } from './template/template.module';
/**
 * PWA
 */
import { FirestoreModule } from '@angular/fire/firestore';
import { MessagingModule } from '@angular/fire/messaging';
import { AppRoutingModule } from './template/app-routing.module';
/**
 * PWA
 */

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TemplateModule,
    PagesModule,
    MessagingModule,
    FirestoreModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [ThemeServiceService, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
