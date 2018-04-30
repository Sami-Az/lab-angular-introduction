import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blah-comments-component',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
 
  comments: Array<Comment> = [
    new Comment (
      "John!",
      "speechless atmospher" ),
    new Comment (
      "Robert",
       "Desert vibes"),
    new Comment (
      "Boby",
      "City vibes"),
    new Comment (
      "That was very enjoyable",
      "Roofs views"
    )
  ];

  constructor() { }

  ngOnInit() {
  }
}

class Comment {
  constructor (
    public title: string,
    public description: string
  ) { }
}


