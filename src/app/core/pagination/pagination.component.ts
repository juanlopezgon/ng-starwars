import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() numPages:number;
  @Input() currentPage:number;

  pagesList:number[] = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changesObject:any) {
    if(changesObject.numPages) {
      this.numPages = changesObject.numPages.currentValue;

      for(let i = 1; i <= this.numPages; i++ )  {
        this.pagesList.push(i);
      }
    }
  }

}
