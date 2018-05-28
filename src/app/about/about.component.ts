import { Component, OnInit } from '@angular/core';
import {AboutService} from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos:any;
  comments=[];
  commentaire = {date:null, message: ''};
  constructor(private aboutService:AboutService) {
    this.infos=this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComments();
    this.commentaire=this.aboutService.getCommentaire();
  }

  ngOnInit() {
  }

  onAddComment(c){
    this.aboutService.addComment(c)
    this.commentaire = {date:null, message: ''};
  }
}
