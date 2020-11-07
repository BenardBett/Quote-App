
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
    new Quote (2,'Wendy', 'Technology…', 'Technology… the knack of so arranging  that we don’t have to experience it.', 
    'Max Frisch', new Date ( 2019, 7, 14), 0, 0),
    new Quote (3,'Mikey','The great myth', 'The great myth of our times is that technology is communication.', 
    'Libby Larsen', new Date ( 2019, 6, 3), 0, 0)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
