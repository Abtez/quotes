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
        let newQuote = localStorage.getItem(inputQuote);

        $(".my-quotes").addClass("myquotes").append('<p><i class="fa fa-quote-left"></i>' + " " + newQuote + " " + '<i class="fa fa-quote-right"></i>' + "<span class='icons' style='display: flex;justify-content: space-evenly;padding: 7px;cursor: pointer;font-size: 14px;'><i class='far fa-thumbs-up fa-2x' style='color: green;'><span class='counter'>22</span></i><i class='far fa-thumbs-down fa-2x' style='color: rgba(255, 102, 0, 0.637);'><span class='counter'>22</span></i><i class='far fa-trash-alt fa-2x' style='color: red;'></i></span>" + " " + '</p>').append("<hr>");

        event.preventDefault();
               
      })
     
    })
  }

}
