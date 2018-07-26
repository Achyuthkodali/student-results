import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  a = new AppComponent();
  public href = window.location.href;
  public home = "http://locahost:4200/";
  public login = "http://localhost:4200/login";
  public register = "http://localhost:4200/register";
  public successreg = "http://localhost:4200/successreg";
  public failreg = "http://localhost:4200/failreg";
  constructor(private router: Router) { }

  name = sessionStorage.getItem("Name");

  canShow(){
    if(sessionStorage.getItem("Login")){
      return false;
    }else {
      if(this.href == this.login ){
        return false;
      }else{
        return true;
      } 
    }
  }

  isLogin(){
    if(sessionStorage.getItem("Login")){
      return true;
    }else {
      return false;
    }
  }

  myIcon(){
    
  }

  isLogin1(){
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

  signOut(){
    sessionStorage.clear();
    window.location.href = "http://localhost:4200/";
  }

  public on_open(){
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  public on_close(){
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }


  ngOnInit() {
    
  }

}
