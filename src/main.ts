
// Angular 2 modules are imported by name and app components are imported using relative paths
import { enableProdMode } from '@angular/core';
// Platform independent?
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Calling the bootstrap module function with the AppModule as an arg tells Angular 
// that this module is the main module for your application. 

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// Angular 2 mods vs ES6 mods: 
// A2 Mods and the new NgModule decorator let us declare in one place all the dependencies and components of our application with the need
// to do it on a per component basis. 
