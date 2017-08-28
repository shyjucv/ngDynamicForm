import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//https://github.com/ng-bootstrap/ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
//https://github.com/chymz/ng2-ckeditor
import { CKEditorModule } from 'ng2-ckeditor';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), HttpModule, CKEditorModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
