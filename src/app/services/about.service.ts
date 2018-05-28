import {Injectable} from '@angular/core'

@Injectable()
export class AboutService {
 constructor(){}

  info= {
    name:"kamal",
    mail:"h.kamal@live.it",
    tel:3806991899
  };
  comments=[
    {date:new Date(),message:"A"},
    {date:new Date(),message:"B"},
    {date:new Date(),message:"C"}
  ];
  commentaire = {date:null, message: ''};

addComment(c){
   this.comments.push(c);
  this.commentaire={date:null, message: ''};

}
getAllComments(){
   return this.comments
}
getInfo(){
   return this.info
}
getCommentaire(){
  return this.commentaire
}
}
