import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormInputComponent } from './form-input/form-input.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { DatePipePipe } from './date-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormInputComponent,
    QuoteDetailsComponent,
    HighlightDirective,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
