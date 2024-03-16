import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Configuración del locale de la app
import localeEsAr from '@angular/common/locales/es-AR'; // Idioma Español de Argentina
import localeFrCa from '@angular/common/locales/fr-CA'; // Idioma Frances de Canadá

import { registerLocaleData } from '@angular/common';

// Establece en Angular los locales que tiene que utilizar la aplicación
registerLocaleData( localeEsAr );
registerLocaleData( localeFrCa );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-AR' // Establece el locale 'es-AR' por defecto para toda la aplicación
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
