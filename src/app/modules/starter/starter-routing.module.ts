import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import {StarterMainPricingComponent} from "./component/starter-main-pricing/starter-main-pricing.component";

const routes: Routes = [
  { path: '', component: StarterComponent , children: [
      { path:'pricing',component:StarterMainPricingComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
