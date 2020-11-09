export class Quote {
  likes: number;
  dislikes: number;
  SeeMore:boolean;
  Author: string;
constructor(public  name: string, public quoteTitle: string, public quote:
string, public quoteAuthor: string, public  postDate: Date){
 this.SeeMore = false;
 this.likes = 0;
 this.dislikes = 0;
}
  }

