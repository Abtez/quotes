import { Quote } from '@angular/compiler';
import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  quote = localStorage.getItem("new quote"); 

  getQuote(item){
    let myQuote = item.target.value;
    myQuote = localStorage.setItem("new quote", myQuote);
    console.log(myQuote);
  }

  getAuthor(aut){
    console.log(aut.target.value);
  }

  getSubmitter(sub){
    console.log(sub.target.value);
  }

  getDate(){ 
  let date = $("#date").val();
  console.log(date)
  }
  

  submitForm(){
    console.log();
    
  }

  constructor() { }

  ngOnInit(): void {
   $(document).ready(function(){
     
   });
  }

}
