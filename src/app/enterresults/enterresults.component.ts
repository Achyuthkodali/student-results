import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-enterresults',
  templateUrl: './enterresults.component.html',
  styleUrls: ['./enterresults.component.scss']
})
export class EnterresultsComponent implements OnInit{

  constructor(private _cookieService:CookieService) { }

  ngOnInit(){
    
    $(document).ready(function(){
      $('#welcome').text("Wellcome "+sessionStorage.getItem("Login")+ "!");
      if(!sessionStorage.getItem("Login")){
        //$(window).attr("location", "http://localhost:4200/login");
        window.location.href= "http://localhost:4200/login";
      }
      $('.submitbutton').click(function(){
        var data = {
        'id' : $('input[name="id"]').val(),
        'name' : $('input[name="name"]').val(),

        'sub1name' : $('input[name="sub1name"]').val(),
        'sub2name' : $('input[name="sub2name"]').val(),
        'sub3name' : $('input[name="sub3name"]').val(),
        'sub4name' : $('input[name="sub4name"]').val(),
        'sub5name' : $('input[name="sub5name"]').val(),

        'sub1int' : $('input[name="sub1int"]').val(),
        'sub2int' : $('input[name="sub2int"]').val(),
        'sub3int' : $('input[name="sub3int"]').val(),
        'sub4int' : $('input[name="sub4int"]').val(),
        'sub5int' : $('input[name="sub5int"]').val(),
        
        'sub1ext' : $('input[name="sub1ext"]').val(),
        'sub2ext' : $('input[name="sub2ext"]').val(),
        'sub3ext' : $('input[name="sub3ext"]').val(),
        'sub4ext' : $('input[name="sub4ext"]').val(),
        'sub5ext' : $('input[name="sub5ext"]').val(),
        };

        $('#dummy').load("http://localhost/acchu/EnterResults.php", data);
      });
     });
    

  } 
}
