import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      if(!sessionStorage.getItem("Login")){
        window.location.href = "http://localhost:4200/login";
      }else {
        $('.user_name').text(sessionStorage.getItem("Name"));
        $('.user_id').text(sessionStorage.getItem("Id"));
        $('.user_dept').text(sessionStorage.getItem("Dept"));
        $('.user_subject').text(sessionStorage.getItem("Subject"));
        $('.user_role').text(sessionStorage.getItem("Role"));
      }
    });

  }



}
