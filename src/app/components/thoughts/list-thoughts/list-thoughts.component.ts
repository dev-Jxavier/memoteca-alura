import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css'
})
export class ListThoughtsComponent {
  constructor(private thoughtService: ThoughtService){
  }

  listThoughts: Thought[] = []

  ngOnInit(): void{
    this.thoughtService.list().subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }

}
