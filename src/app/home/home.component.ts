import { Quotes } from './../form-input/quotes-class';
import { Component, OnInit, Output } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  quotes:Quotes[] =[
    new Quotes("Let bygones be bygones resemblance gets old","Joseph Morgan","Abzed", new Date),
    new Quotes("Ir Is Wot It Is..","Anonymous","Abzed", new Date),
    new Quotes("I can ger it, You can ger it... Anyone can get it","Matiangi","Abzed", new Date),
  ];

  addNewQuote(quotes){
    this.quotes.push(quotes);
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() {
   }

  ngOnInit(): void { 
  }

}
