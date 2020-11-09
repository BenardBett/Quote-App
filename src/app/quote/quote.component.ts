
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
   new Quote ( 'Enock', 'Human spirit', 'The human spirit must prevail over technology to allow humans be in charge.',
    'Alberto',  new Date(2020, 7, 3)),
    new Quote ('Benard', 'Technology…', 'Technology… the knack of so arranging  that we don’t have to experience it.',
    'Justus', new Date(2020, 7, 14)),
    new Quote ('Gidion', 'The great myth', 'The great myth of our times is that technology is communication.',
    'Einstin', new Date(2020, 7, 30))
  ];
  quoteTitle: string;

  addNewQuote (quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }
  likes(index){
    this.quotes[index].likes++
  }
  dislikes(index){
    this.quotes[index].dislikes++
  }
  completeDate(complete: boolean){
  }
  high: number;
  name:  string;
  author: string;
  quoteAuthor: string;
  quote: string
  low: number;
  day:any;
  highVotes() {
    this.high = 0;
    for (let i = 0;i<this.quotes.length;i++){
    if(this.quotes[i].likes>this.high){
      this.high = this.quotes[i].likes;
      this.quoteAuthor = this.quotes[i].Author;
      this.quoteTitle = this.quotes[i].quoteTitle;
      this.quote = this.quotes[i].quote;
      this.low = this.quotes[i].dislikes;
      this.day = this.quotes[i].postDate;
    }
  }
  }
  constructor() { }
  ngOnInit(): void {
  }
}


//   showDetails(index){
//      this. quotes[index].SeeMore = !this.quotes[index].SeeMore;

//   }
//   deleteThisQoute(deleteQuote, index){
//     if (deleteQuote){
//       this.quotes.splice(index, 2);
//     }
//     }
//   constructor() { }

//   ngOnInit(): void {
//   }

// }
