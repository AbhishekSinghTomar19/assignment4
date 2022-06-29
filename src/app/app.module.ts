import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoveringDirectiveDirective } from './Directives/hovering-directive.directive';
import { ArrayDirectiveDirective } from './Directives/array-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoveringDirectiveDirective,
    ArrayDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
