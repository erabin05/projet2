import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { Niveau1PageComponent } from './niveau1-page/niveau1-page.component';
import { RecompenseMoonComponent } from './recompense-moon/recompense-moon.component';
import { ConnectFormComponent } from './connect-form/connect-form.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';




@NgModule({
  declarations: [
    AppComponent,

    WelcomePageComponent,
    ConnectFormComponent,
    TableauDeBordComponent,
    Niveau1PageComponent,
    RecompenseMoonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule, 
    BrowserAnimationsModule,

    RouterModule.forRoot(
      [
      { path: "niveau1", component: Niveau1PageComponent },
      { path: "recompenseLune", component: RecompenseMoonComponent },
      { path: "connectForm", component: ConnectFormComponent }

      ],
      
      {useHash: true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
