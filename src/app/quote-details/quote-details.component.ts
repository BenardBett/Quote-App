import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
@Input() quote = Quote;
@Output()deleteQuote = new EventEmitter<boolean>();


 delete(removeQuote = boolean ){
  this.deleteQuote.emit(removeQuote);
}

  constructor() { }

  ngOnInit(): void {
  }

}
