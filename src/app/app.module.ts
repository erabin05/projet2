import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ConnectFormComponent } from './connect-form/connect-form.component';
import { RecompenseMoonComponent } from './recompense-moon/recompense-moon.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ConnectFormComponent,
    RecompenseMoonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
