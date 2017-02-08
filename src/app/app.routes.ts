
import {Routes} from "@angular/router";
import {NotFoundComponent} from "./core/not-found/not-found.component";
export const routes:Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies'},
  { path: 'planets', loadChildren: './planets/planets.module#PlanetsModule' },
  { path: '**', component: NotFoundComponent }
];
