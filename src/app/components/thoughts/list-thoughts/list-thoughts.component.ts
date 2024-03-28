import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css'
})
export class ListThoughtsComponent {
  constructor(private thoughtService: ThoughtService, private router: Router) {
  }

  listThoughts: Thought[] = []
  currentPage: number = 1
  showPaginationButton: boolean = true
  search: string = ""
  favorite: boolean = false
  listFavorite: Thought[] = []
  title: string = 'Meu Mural'

  ngOnInit(): void {
    this.thoughtService.list(this.currentPage, this.search, false).subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }

  reloadThoughts() {
    this.favorite = false
    this.currentPage = 1
    this.router.navigate([this.router.url])
  }

  searchThoughts() {
    this.currentPage = 1;
    this.showPaginationButton = true;
    this.thoughtService.list(this.currentPage, this.search, this.favorite).subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }

  loadMoreThoughts() {
    this.thoughtService.list(++this.currentPage, this.search, this.favorite).subscribe((newThoughts) => {
      this.listThoughts.push(...newThoughts)
      if (!newThoughts.length) {
        this.showPaginationButton = false
      }
    })
  }

  listFavoritesThoughts() {
    this.title = 'Meus favoritos'
    this.favorite = true
    this.showPaginationButton = true;
    this.currentPage = 1;
    this.thoughtService.list(this.currentPage, this.search, this.favorite).subscribe((listThoughts) => {
      this.listThoughts = listThoughts
      this.listFavorite = listThoughts
    })
  }

}
