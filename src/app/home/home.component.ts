import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#addtoquotes").submit(function(){
        let inputQuote = $("#quoteinput").val();
        let key = 'Item 1';
         localStorage.setItem(key, 'Value');        
        console.log(inputQuote);
        
        

      })
     
    })
  }

}
