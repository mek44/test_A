import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts=[
    {
      title: "mon premier post",
      content: "voici ce que je voulais te dire,.. tu es un ami des des des et c'est pour quoi tu es un ami qui ",
      loveIts : 0,
      created_at: Date()
    },
    {
      title: "Mon second post",
      content: "voici mon et la et le et des et ils et nous et nous et vous",
      loveIts: 0,
      created_at: Date()
    },
    {
      title: "Mon troisieme post",
      content: " this is my third pst.  and this makes me happy",
      loveIts:0,
      created_at: Date()
    }
  ]
}
