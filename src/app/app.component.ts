import { Component } from '@angular/core';
import $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quotes';
  ngOnInit(): void {
    $(document).ready(function(){
      
      $("#addtoquotes").submit(function(){
        let inputQuote = $("#quoteinput").val();
         localStorage.setItem(inputQuote, `${inputQuote}`);        
        console.log(inputQuote);
        let newQuote = localStorage.getItem(inputQuote);

        $(".my-quotes").html('<p><i class="fa fa-quote-left"></i>' + " " + newQuote + " " +
         '<i class="fa fa-quote-right"></i>' + "<span class='icons' style='display: flex;justify-content: space-evenly;padding: 7px;cursor: pointer;font-size: 14px;'><i class='far fa-thumbs-up fa-2x' style='color: green;'><span class='counter'>22</span></i><i class='far fa-thumbs-down fa-2x' style='color: rgba(255, 102, 0, 0.637);'><span class='counter'>22</span></i><i class='far fa-trash-alt fa-2x' style='color: red;'></i></span>" +
          " " + '</p>').addClass("myquotes").append("<hr>");

        event.preventDefault();
               
      });
     
    });
  }
}
