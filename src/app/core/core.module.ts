import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SwapiService } from './swapi.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports     : [HttpModule, CommonModule],
  declarations: [NotFoundComponent, PaginationComponent],
  exports: [PaginationComponent]
})
export class CoreModule {
  static forRoot (): ModuleWithProviders {
    return {
      ngModule : CoreModule,
      providers: [SwapiService]
    }
  }

  static forChild (): ModuleWithProviders {
    return {
      ngModule : CoreModule
    }
  }
}
