import { NgModule } from '@angular/core';

import {SphereComponent} from './sphere/sphere.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RouterModule, Routes } from '@angular/router';
import { expressionType } from '@angular/compiler/src/output/output_ast';

const routes: Routes = [
  
  {path: 'sphere', component:SphereComponent},
  {path:'graph', component:BarChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ SphereComponent,BarChartComponent]
