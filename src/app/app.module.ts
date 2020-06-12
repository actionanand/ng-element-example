import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { GreetComponent } from './greet/greet.component';

@NgModule({
  declarations: [
    GreetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent, GreetComponent],
  entryComponents: [GreetComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const customElement = createCustomElement(GreetComponent, { injector });
    customElements.define('app-greet', customElement);
  }

  ngDoBootstrap() { }
}
