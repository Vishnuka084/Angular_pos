import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './component/starter-header/starter-header.component';
import { StarterFooterComponent } from './component/starter-footer/starter-footer.component';
import { StarterMainSliderComponent } from './component/starter-home-context/inner-items/starter-main-slider/starter-main-slider.component';
import { StarterMainServicesComponent } from './component/starter-home-context/inner-items/starter-main-services/starter-main-services.component';
import { StarterMainPricingComponent } from './component/starter-main-pricing/starter-main-pricing.component';
import { StarterHomeContextComponent } from './component/starter-home-context/starter-home-context.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    StarterMainSliderComponent,
    StarterMainServicesComponent,
    StarterMainPricingComponent,
    StarterHomeContextComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
