import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-remove-thought',
  templateUrl: './remove-thought.component.html',
  styleUrl: './remove-thought.component.css'
})
export class RemoveThoughtComponent {
  thought: Thought = {
    id: '0',
    content: '',
    author: '',
    model: 'modelo1'
  }

  constructor(private thoughtService: ThoughtService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    id && this.thoughtService.getById(id).subscribe((thought) => {
      this.thought = thought
    })
  }

  removeThought() {
    const id = this.thought.id
    id && this.thoughtService.remove(id).subscribe(() => {
      this.router.navigate(['/list'])
    })
  }

  cancel() {
    this.router.navigate(['/list'])
  }

}
