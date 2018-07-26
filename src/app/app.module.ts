import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterresultsComponent } from './enterresults/enterresults.component';
import { ViewresultsComponent } from './viewresults/viewresults.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { SuccessregComponent } from './successreg/successreg.component';
import { FailregComponent } from './failreg/failreg.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterresultsComponent,
    ViewresultsComponent,
    TopnavComponent,
    LoginComponent,
    SidebarComponent,
    UserComponent,
    WelcomeComponent,
    RegisterComponent,
    SuccessregComponent,
    FailregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
