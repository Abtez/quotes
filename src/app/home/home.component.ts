import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public quotes = [ "The way to get started is to quit talking and begin doing",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn",
  "Whoever is happy will make others happy too"
]

public inputQuote

  thumbsup = 0;
  thumbsdown = 0;

  dislike(){
    this.thumbsdown = this.thumbsdown+1;
  }

  like(){
    this.thumbsup = this.thumbsup+1;
  }

  constructor() {
   }

  ngOnInit(): void { 
    $(document).ready(function(){
      $(".delete").click(function(){
        $(".items").remove();
        $("hr").remove();
      })
    })
  }

}
