import { Quotes } from './quotes-class';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  newMyQuote = new Quotes("", "","", new Date());

  @Output() addQuote = new EventEmitter <Quotes>();

  onSubmit(){
    this.addQuote.emit(this.newMyQuote);
    this.newMyQuote = new Quotes("", "","", new Date());
  }
 
  constructor() { }

  ngOnInit(): void {

}

}
