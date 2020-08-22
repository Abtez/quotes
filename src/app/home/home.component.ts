import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quoteOne = "The way to get started is to quit talking and begin doing";
  quoteTwo = "Tell me and I forget. Teach me and I remember. Involve me and I learn";
  quoteThree = "Whoever is happy will make others happy too";
  
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      
      $("#addtoquotes").submit(function(){
        let inputQuote = $("#quoteinput").val();
         localStorage.setItem(inputQuote, `${inputQuote}`);        
        console.log(inputQuote);
        let display = $("#quotes");
        display.append('<p>' + '<i class="fa fa-quote-left"></i>' + " " + localStorage.getItem(inputQuote) + " " + '<i class="fa fa-quote-right"></i>' + '</p>');

        event.preventDefault();
               
      })
     
    })
  }

}
