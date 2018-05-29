import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// No TS extension
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import {PeopleService } from './people.service';
import { PersonDetailsComponent } from './person-details/person-details.component';

import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  // Declare components and directives that belong to the current module
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent
  ],
  // Declare module dependencies (browser, forms, routing, http)
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpModule,
    AppRoutingModule 
  ],
  // 
  providers: [PeopleService],
  // Identify the root component that A2 should use to bootstrap your application
  bootstrap: [AppComponent]
})
export class AppModule { }
