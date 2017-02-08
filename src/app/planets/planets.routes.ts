import {Routes} from "@angular/router";
import {PlanetsListComponent} from "./planets-page/planets-list/planets-list.component";
import {PlanetComponent} from "./planets-page/planet/planet.component";
import {PlanetsPageComponent} from './planets-page/planets-page.component';

export const routes:Routes = [
  {
    path: '',
    component: PlanetsPageComponent,
    children: [
      {
        path: '',
        component: PlanetsListComponent
      },
      {
        path: ':id',
        component: PlanetComponent
      }
    ]

  }
];
