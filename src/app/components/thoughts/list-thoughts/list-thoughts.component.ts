import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css'
})
export class ListThoughtsComponent {
  constructor(private thoughtService: ThoughtService) {
  }

  listThoughts: Thought[] = []
  currentPage: number = 1
  showPaginationButton: boolean = true
  search: string = ""

  ngOnInit(): void {
    this.thoughtService.list(this.currentPage, this.search).subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }

  searchThoughts() {
    this.currentPage = 1;
    this.showPaginationButton = true;
    this.thoughtService.list(this.currentPage, this.search).subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }

  loadMoreThoughts() {
    this.thoughtService.list(++this.currentPage, this.search).subscribe((newThoughts) => {
      this.listThoughts.push(...newThoughts)
      if (!newThoughts.length) {
        this.showPaginationButton = false
      }
    })
  }

}
