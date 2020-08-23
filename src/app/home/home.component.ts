import { element } from 'protractor';
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

  textsize = '25px'

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
  }

}
