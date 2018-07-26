import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _cookieService:CookieService) {
   }

  ngOnInit() {


    
    $(document).ready(function(){
      $('#submitbutton').click(function(){
        var data1 = {
        'Username' : $('#Username').val(),
        'Password' : $('#Password').val(),
        };
        //var Username = 'Username';
        //var Password = 'Password';
        $.post("http://localhost/acchu/validate.php", data1, function(data,status){
          if(!data){
            alert("Username or Password is incorrect!");
          }
          sessionStorage.setItem("Login", data.Username);
          sessionStorage.setItem("Name", data.Name);
          sessionStorage.setItem("Id", data.Id);
          sessionStorage.setItem("Dept", data.Dept);
          sessionStorage.setItem("Subject", data.Subject);
          sessionStorage.setItem("Role", data.Role);
          $(window).attr("location", "http://localhost:4200/user");
          //alert('Username is: '+ Username+ 'Password is' + Password);
        });
      });
     });


  }
}
