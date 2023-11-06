import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chaps-lib-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent {
  @Input() enableNextPage = true;
  @Input() currentPage = 0;
  @Input() position = 'end';

  @Output() onPagination = new EventEmitter();
  
  nextPage(): void {
    this.currentPage++;
    this.onClickPagination();
  }

  prevPage(): void {
    this.currentPage--;
    this.onClickPagination();
  }

  onClickPagination(): void {
    this.onPagination.emit(this.currentPage);
  }
}
