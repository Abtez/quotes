import { QuoteDetailsComponent } from './../quote-details/quote-details.component';
import { Quotes } from './../form-input/quotes-class';
import { Component, OnInit, Output, Input } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  quote:Quotes[] =[
    new Quotes("Let bygones be bygones resemblance gets old","Joseph Morgan","Abzed", new Date("2012/08/23"),0,0),
    new Quotes("Ir Is Wot It Is..","Anonymous","Abzed", new Date("2020/08/24"),0,0),
    new Quotes("I can ger it, You can ger it... Anyone can get it","Matiangi","Abzed", new Date("2020/05/02"),0,0),
  ];

  addNewQuote(quotes){
    let quoteLength = this.quote.length;
    quotes.id = quoteLength + 1;
    this.quote.unshift(quotes)
  }

  toogleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  
  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete the Quote " ${this.quote[index].quote} ? "`)

      if (toDelete){
        this.quote.splice(index, 1)
      }
    }
  }

  preNum;
  lastNum;
  counter;

  highestUpvote(): boolean{
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quote.length; this.counter++) {
      this.lastNum = this.quote[this.counter].thumbsUp;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() {
   }

  ngOnInit(): void { 
    $(document).ready(function(){
     
    })
  }

}
