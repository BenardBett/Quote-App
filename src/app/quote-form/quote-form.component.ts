
import { Component, OnInit } from '@angular/core';
import {Message  } from '../message';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  formName: string;
  formQuoteTitle: string;
  formQuote: string;
  formQuoteAuthor: string;
  published: Date;


  constructor() { }

  ngOnInit(): void {
  }

}
