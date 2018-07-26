import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnterresultsComponent } from './enterresults/enterresults.component';
import { ViewresultsComponent } from './viewresults/viewresults.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { SuccessregComponent } from './successreg/successreg.component';
import { FailregComponent } from './failreg/failreg.component';

const routes: Routes = [
  {
    path: 'enterresults',
    component: EnterresultsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'viewresults',
    component: ViewresultsComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'successreg',
    component: SuccessregComponent
  },
  {
    path: 'failreg',
    component: FailregComponent
  },
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
