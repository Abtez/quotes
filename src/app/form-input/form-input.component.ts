import { Quotes } from './quotes-class';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Output() addQuote = new EventEmitter <Quotes>();

  newMyQuote = new Quotes("", "","", new Date(), 0,0);

  onSubmit(){
    this.addQuote.emit(this.newMyQuote);
    this.newMyQuote = new Quotes("", "","", new Date(), 0,0);
    console.log(this.newMyQuote.quote)
  }
 
  constructor() { }

  ngOnInit(): void {

}

}
