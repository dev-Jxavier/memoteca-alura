import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrl: './create-thoughts.component.css',
})
export class CreateThoughtsComponent {
  constructor(private thoughtService: ThoughtService, private router: Router) {}
  thought: Thought = {
    content: '',
    author: '',
    model: 'modelo1',
  };

  saveThought() {
    this.thoughtService.create(this.thought).subscribe(() => {
      this.router.navigate(["/list"])
    })
  }

  cancelThought() {
    this.router.navigate(["/list"])
  }
}
