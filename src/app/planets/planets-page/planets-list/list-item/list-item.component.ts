import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() planet:any;
  @Output() onPlanetSelected:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  planetClicked() {
    this.onPlanetSelected.emit(this.planet);
  }

}
