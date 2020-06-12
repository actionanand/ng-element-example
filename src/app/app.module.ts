import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GreetComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const custom = createCustomElement(GreetComponent, {injector: this.injector});
    customElements.define('app-greet',custom);
  }
}
