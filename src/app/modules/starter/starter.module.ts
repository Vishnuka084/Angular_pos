import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './component/starter-header/starter-header.component';
import { StarterFooterComponent } from './component/starter-footer/starter-footer.component';
import { StarterMainSliderComponent } from './component/starter-main-slider/starter-main-slider.component';
import { StarterMainServicesComponent } from './component/starter-main-services/starter-main-services.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    StarterMainSliderComponent,
    StarterMainServicesComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
