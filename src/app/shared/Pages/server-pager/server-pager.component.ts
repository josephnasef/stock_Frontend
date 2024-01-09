 import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'ServerPager',
  template: `<ul *ngIf="pager.pages && pager.pages.length" class="pagination">
    <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
        <a (click)="setPage(1)" class="page-link"><<</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
        <a (click)="setPage(pager.currentPage - 1)" class="page-link"><</a>
    </li>
    <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
        <a (click)="setPage(page)" class="page-link">{{page}}</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
        <a (click)="setPage(pager.currentPage + 1)" class="page-link">></a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
        <a (click)="setPage(pager.totalPages)" class="page-link">>></a>
    </li>
</ul>`
})

export class ServerPagerComponent implements OnInit, OnChanges {
  @Input() items!: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 15;
  @Input() maxPages = 4;

  @Input() TotalPages=1;

  pager: any = {};
  CurrentPage: number = 1;

  ngOnInit() {
    this.setPage(this.initialPage);

  }



  ngOnChanges(changes: SimpleChanges) {


    if (changes['TotalPages.currentValue'] !== changes['TotalPages'].previousValue && changes['TotalPages'].previousValue != undefined) {


      this.setPage(this.initialPage);
    }
}

  setPage(page: number) {
    if(page !=this.CurrentPage)
    {
      this.CurrentPage = page;
      this.changePage.emit(this.CurrentPage);

    }
    this.pager = this.paginate(this.TotalPages, page, this.pageSize, this.maxPages);
  }

  paginate(totalItems: number, currentPage: number | undefined, pageSize: number | undefined, maxPages: number | undefined) {
    if (currentPage === void 0) { currentPage = 1; }
    if (pageSize === void 0) { pageSize = 10; }
    if (maxPages === void 0) { maxPages = 10; }
    // calculate total pages
    var totalPages = this.TotalPages;
    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    }
    else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    var startPage: number, endPage;
    if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
    }
    else {
      // total pages more than max so calculate start and end pages
      var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1;
        endPage = maxPages;
      }
      else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      }
      else {
        // current page somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }
    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    //console.log(pages);
    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
