import { Component, OnInit, Output } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  quotesList:any[];

  constructor() {
   }

  ngOnInit(): void { 
  }

  thumbsup = 0;
  thumbsdown = 0;

  dislike(){
    this.thumbsdown = this.thumbsdown+1;
  }

  like(){
    this.thumbsup = this.thumbsup+1;
  }

}
