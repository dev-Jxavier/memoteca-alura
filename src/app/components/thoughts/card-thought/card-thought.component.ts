import { Component, Input } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-card-thought',
  templateUrl: './card-thought.component.html',
  styleUrl: './card-thought.component.css'
})
export class CardThoughtComponent {
  @Input() thought: Thought = {
    id: "0",
    content: "I love angular",
    author: "Dev",
    model: "modelo3"
  }

  widthThought(): string {
    if (this.thought.content.length >= 256) {
      return "pensamento-g"
    } else {
      return "pensamento-p"
    }
  }
}
