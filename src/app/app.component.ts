import { Component } from '@angular/core';

@Component({
  selector:'.mine', //tag 'my_root', attibute of other component  '[mine]',  class .css 
  
// le nom de la balise pour inserer le project dans le fichier html
  // si je met le nom entre [] cet elemet n'est plus inseré comme une balise mais comme un attibut dìun conteneur html: DIV par exemple
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contact={
    name:"kamal",
    mail:"h.kamal@live.it"
  }
}
