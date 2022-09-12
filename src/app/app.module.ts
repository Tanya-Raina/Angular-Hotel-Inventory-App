import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({ // decorator, it is modifying the class
  declarations: [
    AppComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent] // which component to start with
  // this is the root component, the first component to be loaded on index.html
})
export class AppModule { }


// Angular
// - In Angular, everything is a class but to bootstrap the application, we need to have at least one module. We call this module as `root module`.
// - In `app.module.ts`, we have this which is `AppModule`.
// - Any component, directive or pipe that we create, we need to add it to the `declarations` array.

// component - views that are rendered in the browser
