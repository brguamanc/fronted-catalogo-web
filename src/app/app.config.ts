import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(HttpClientModule),provideToastr(
    {
      timeOut: 4000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }
  ),provideAnimations(), 
  importProvidersFrom(provideFirebaseApp(() => 
  initializeApp({
    "projectId":"uploader-images",
    "appId":"1:890271005652:web:96e22ecc303e05695ab441",
    "storageBucket":"uploader-images.appspot.com",
    "apiKey":"AIzaSyBwSpJdMKW_W4eVBbDqbviGEdCUwLLL_-c",
    "authDomain":"uploader-images.firebaseapp.com",
    "messagingSenderId":"890271005652"}))), 
    importProvidersFrom(
      provideStorage(() => getStorage())
      )]
};
