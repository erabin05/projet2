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
import { Niveau2PageComponent } from './niveau2-page/niveau2-page.component';
import { SolveHoustonProblemComponent } from './solve-houston-problem/solve-houston-problem.component';
import { FixedBugComponent } from './fixed-bug/fixed-bug.component';




@NgModule({
  declarations: [
    AppComponent,

    WelcomePageComponent,
    ConnectFormComponent,
    Niveau1PageComponent,
    RecompenseMoonComponent,
    Niveau2PageComponent,
    SolveHoustonProblemComponent,
    FixedBugComponent,

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
      { path: "niveau2", component: Niveau2PageComponent },
      { path: "solvehouston", component: SolveHoustonProblemComponent },
      { path: "recompenseLune", component: RecompenseMoonComponent },
      { path: "connectForm", component: ConnectFormComponent },
      { path: "fixedBug", component: FixedBugComponent }

      ],
      
      {useHash: true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
