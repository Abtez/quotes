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

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }

  thumbsUp = 0;
  upVote(){
    this.thumbsUp++
  }

  thumbsDown = 0;
  downVote(){
   this.thumbsDown--
  }

  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0;
    this.lastNum = 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
