import { Component, Input } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-card-thought',
  templateUrl: './card-thought.component.html',
  styleUrl: './card-thought.component.css'
})
export class CardThoughtComponent {

  constructor(private readonly thoughtService: ThoughtService) {}

  @Input() thought: Thought = {
    id: "0",
    content: "I love angular",
    author: "Dev",
    model: "modelo3",
    favorite: false
  }

  @Input() listFavorite: Thought[] = []

  widthThought(): string {
    if (this.thought.content.length >= 256) {
      return "pensamento-g"
    } else {
      return "pensamento-p"
    }
  }

  changeIconFavorite(): string {
    if (this.thought.favorite) {
      return "ativo"
    } else {
      return "inativo"
    }
  }

  changeFavorite() {
    this.thoughtService.changeFavorite(this.thought).subscribe(() => {
      this.listFavorite.splice(this.listFavorite.indexOf(this.thought), 1)
    });
  }
}
