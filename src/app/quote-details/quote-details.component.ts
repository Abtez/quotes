import { Quotes } from './../form-input/quotes-class';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes:Quotes;

  @Output() isComplete = new EventEmitter<boolean>();

  
  deleteQuote(complete:boolean){
    this.isComplete.emit(complete)
  }

  upVote(quotes){
    this.quotes.upVote++;
  }
  downVote(quotes){
    this.quotes.downVote++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
