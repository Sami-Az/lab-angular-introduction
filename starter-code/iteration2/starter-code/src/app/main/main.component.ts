import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blah-articles-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  articles: Array<Article> = [
    new Article (
      "That's is an amazing thing !",
      "https://images.unsplash.com/photo-1523065144972-e5f5c9ea6ed9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4f0025299a23f1423e55bd6036a1e03&auto=format&fit=crop&w=800&q=60",
      "Into the wild, nature brings your inner peace" ),
    
  ];

  constructor() { }

  ngOnInit() {
  }
}

class Article {
  constructor (
    public title: string,
    public image: string,
    public description: string
  ) { }
}
