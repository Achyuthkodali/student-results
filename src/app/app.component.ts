import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { TopnavComponent } from '../app/topnav/topnav.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private _cookieService:CookieService) { }
  public href = window.location.href;
  public home = "http://localhost:4200/";
  public login = "http://localhost:4200/login";
  public register = "http://localhost:4200/register";
  public successreg = "http://localhost:4200/successreg";
  public failreg = "http://localhost:4200/failreg";
  isLogin(){
    if(sessionStorage.getItem("Login")){
      return true;
    }else {
      if(this.href == this.login || this.href == this.home || this.href == this.register ||  this.href == this.successreg || this.href == this.failreg){
        return false;
      }else{
        return true;
      } 
    }
  }

  public on_open(){
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("content").style.marginLeft = "160px";
  }

  public on_close(){
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("content").style.marginLeft = "0px";
  }
  
  ngOnInit(){
  }
}
