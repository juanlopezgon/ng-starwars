import {Component, OnInit} from '@angular/core';

import {SwapiService} from "./core/swapi.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Star works!';
  people = [];

  constructor(private swapiService:SwapiService){

  }

  ngOnInit(){
    //debugger;

      this.swapiService
        .getPeopleList()
        .subscribe((people) => this.people = people);
  }
}

