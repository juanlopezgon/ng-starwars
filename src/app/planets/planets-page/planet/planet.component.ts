import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SwapiService} from "../../../core/swapi.service";

@Component({
  selector: 'app-planet',
  templateUrl: 'planet.component.html',
  styleUrls: ['planet.component.css']
})
export class PlanetComponent implements OnInit {
  planet = {};

  constructor(
    private swapiService:SwapiService,
    private route:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      const planetId = +params.id;

      this.swapiService
        .getPlanet(planetId)
        .then((planet) => this.planet = planet);
    });
  }

}
