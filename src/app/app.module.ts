import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ConnectFormComponent } from './connect-form/connect-form.component';
import { Niveau1PageComponent } from './niveau1-page/niveau1-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectFormComponent,
    Niveau1PageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
