import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoveringDirectiveDirective } from './Directives/hovering-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoveringDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
