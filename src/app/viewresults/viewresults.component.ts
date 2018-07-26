import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-viewresults',
  templateUrl: './viewresults.component.html',
  styleUrls: ['./viewresults.component.scss']
})
export class ViewresultsComponent implements OnInit {

  ngOnInit() {
    if(!sessionStorage.getItem("Login")){
      window.location.href = "http://localhost:4200/login";
    }
    $(document).ready(function(){
      $('.submit').click(function(){
        var id_data = {
          'id' : $('#id').val()
        };

        $.post("http://localhost/acchu/ViewResults.php", id_data, function(data,status){
          var sub1cred;
          var sub2cred;
          var sub3cred;
          var sub4cred;
          var sub5cred;

          var sub1int = parseInt(data.sub1int);
          var sub2int = parseInt(data.sub2int);
          var sub3int = parseInt(data.sub3int);
          var sub4int = parseInt(data.sub4int);
          var sub5int = parseInt(data.sub5int);

          var sub1ext = parseInt(data.sub1ext);
          var sub2ext = parseInt(data.sub2ext);
          var sub3ext = parseInt(data.sub3ext);
          var sub4ext = parseInt(data.sub4ext);
          var sub5ext = parseInt(data.sub5ext);



          var sub1tot = sub1int + sub1ext;
          var sub2tot = sub2int + sub2ext;
          var sub3tot = sub3int + sub3ext;
          var sub4tot = sub4int + sub4ext;
          var sub5tot = sub5int + sub5ext;

          if((data.sub1ext)>= 24 && (sub1tot) >= 40 ){
            sub1cred = 3;
          }else sub1cred = 0;

          if((data.sub2ext)>= 24 && (sub2tot) >= 40 ){
            sub2cred = 3;
          }else sub2cred = 0;
          
          if((data.sub3ext)>= 24 && (sub3tot) >= 40 ){
            sub3cred = 3;
          }else sub3cred = 0;

          if((data.sub4ext)>= 24 && (sub4tot) >= 40 ){
            sub4cred = 3;
          }else sub4cred = 0;

          if((data.sub5ext)>= 24 && (sub5tot) >= 40 ){
            sub5cred = 3;
          }else sub5cred = 0;

          $('.label').removeAttr('hidden');
          $('.table').removeAttr('hidden');

          $('.ht_no').text(data.name);
          $('#sub1name').text(data.sub1name);
          $('#sub2name').text(data.sub2name);
          $('#sub3name').text(data.sub3name);
          $('#sub4name').text(data.sub4name);
          $('#sub5name').text(data.sub5name);
          $('#sub1int').text(data.sub1int);
          $('#sub2int').text(data.sub2int);
          $('#sub3int').text(data.sub3int);
          $('#sub4int').text(data.sub4int);
          $('#sub5int').text(data.sub5int);
          $('#sub1ext').text(data.sub1ext);
          $('#sub2ext').text(data.sub2ext);
          $('#sub3ext').text(data.sub3ext);
          $('#sub4ext').text(data.sub4ext);
          $('#sub5ext').text(data.sub5ext);
          $('#sub1tot').text(sub1tot);
          $('#sub2tot').text(sub2tot);
          $('#sub3tot').text(sub3tot);
          $('#sub4tot').text(sub4tot);
          $('#sub5tot').text(sub5tot);
          $('#sub1cred').text(sub1cred);
          $('#sub2cred').text(sub2cred);
          $('#sub3cred').text(sub3cred);
          $('#sub4cred').text(sub4cred);
          $('#sub5cred').text(sub5cred);
          //$('.table').attr('hidden','false');
          //$('.label').attr('hidden','false');
        });

       
      });
    });
  }

}
