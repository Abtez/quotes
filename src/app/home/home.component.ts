import { QuotesServService } from './myservices/quotes-serv.service';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers :[QuotesServService]
})
export class HomeComponent implements OnInit {

  quotesList:any[];

  constructor(private quoteService: QuotesServService) {
   }

  ngOnInit(): void { 
   this.quoteService.getMyQuotes().snapshotChanges().subscribe(
     item => {
       this.quotesList = [];
       item.forEach(element =>{
         var x = element.payload.toJSON();
         x = element.key;
         this.quotesList.push(x)
       })
     }
   );
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
