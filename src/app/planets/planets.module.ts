import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";
import { PlanetsListComponent } from './planets-page/planets-list/planets-list.component';
import {RouterModule} from "@angular/router";

import { routes } from './planets.routes';
import { InhabitantsPipe } from './inhabitants.pipe';
import { ListItemComponent } from './planets-page/planets-list/list-item/list-item.component';
import { PlanetComponent } from './planets-page/planet/planet.component';
import { PlanetsPageComponent } from './planets-page/planets-page.component';

@NgModule({
  declarations: [PlanetsListComponent, InhabitantsPipe, ListItemComponent, PlanetComponent, PlanetsPageComponent],
  imports: [
    CommonModule,
    CoreModule.forChild(),
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class PlanetsModule { }
