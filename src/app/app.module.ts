import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//https://github.com/ng-bootstrap/ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
