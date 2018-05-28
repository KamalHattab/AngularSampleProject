import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info= {
  name:"kamal",
  mail:"h.kamal@live.it",
  tel:3806991899
}
comments=[
  {date:new Date(),message:"A"},
  {date:new Date(),message:"B"},
  {date:new Date(),message:"C"}
]
  commentaire = {date:null, message: ''}

  constructor() { }

  ngOnInit() {
  }
  onAddComment(c) {
    console.log(c)
    this.commentaire.date=new Date();
    this.commentaire.message=c.message
    this.comments.push(this.commentaire);
     this.commentaire={date:null,message:""}
  }
}
