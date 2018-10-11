import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ConnectFormComponent } from './connect-form/connect-form.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ConnectFormComponent,
    TableauDeBordComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
