import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('#SubmitButton').click(function(){
        var registerdata = {
          'Name' : $('#Name').val(),
          'Id' : $('#Id').val(),
          'Subject' : $('#Subject').val(),
          'Role' : $('#Role').val(),
          'Uname_Email' : $('#Uname_Email').val(),
          'Password' : $('#Password').val(),
          'Dept' : $('#Dept').val()
        };
        if($('#Password').val() != $('#Confirm').val()){
          alert("Passwords Do Not Match !");
        }else{
          $.post("http://localhost/acchu/Register.php", registerdata, function(data, status){
            if(status && data.status){
              window.location.href = "http://localhost/successreg";
            }else{
              window.location.href = "http://localhost/failreg";
            }
          });
        }
        alert(registerdata.Name);
      });
    });
  }

}
