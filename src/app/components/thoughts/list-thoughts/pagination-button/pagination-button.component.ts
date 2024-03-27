import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrl: './pagination-button.component.css'
})
export class PaginationButtonComponent {
  @Input() showButton: boolean = false

}
