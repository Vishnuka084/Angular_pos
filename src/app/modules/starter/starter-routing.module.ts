import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import {StarterMainPricingComponent} from "./component/starter-main-pricing/starter-main-pricing.component";
import {StarterHomeContextComponent} from "./component/starter-home-context/starter-home-context.component";

const routes: Routes = [
  { path: '', component: StarterComponent , children: [
      { path:'',redirectTo:'/starter/home', pathMatch:'full'},
      { path:'home',component:StarterHomeContextComponent},
      { path:'pricing',component:StarterMainPricingComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
