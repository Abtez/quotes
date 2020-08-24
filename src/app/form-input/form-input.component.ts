import { Quote } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quote>;

  newMyQuote = new Quote("", "","", new Date(), 0,0);
 
  constructor() { }

  ngOnInit(): void {

}

}
