import { Quote } from '@angular/compiler';
import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class QuotesServService {

  myQuotes: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }


}


