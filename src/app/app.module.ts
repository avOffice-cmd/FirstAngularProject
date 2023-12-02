import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './AllComponents/home/home.component';
import { LinkComponent } from './AllComponents/link/link.component';
import { FormsModule } from '@angular/forms';

// It is called deparator
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // here we can put service name or class name
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { 
  constructor()
  {
    console.log("Module loaded......");
    
  }
}
