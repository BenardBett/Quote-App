
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
   new Quote (1, 'Charles', 'Human spirit', 'The human spirit must prevail over technology to allow humans be in charge.',
    'Albert Einstein',  new Date(2019, 7, 12), 0, 0),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
