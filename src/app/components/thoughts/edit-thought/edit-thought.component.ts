import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.css'
})
export class EditThoughtComponent {
  thought: Thought = {
    id: '0',
    content: '',
    author: '',
    model: 'modelo1'
  }

  constructor(private thoughtService: ThoughtService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    id && this.thoughtService.getById(id).subscribe((thought) => {
      this.thought = thought
    })
  }

  editThought() {
    this.thoughtService.edit(this.thought).subscribe(() => {
      this.router.navigate(['/list'])
    })
  }

  cancelThought() {
    this.router.navigate(['/list'])
  }
}
