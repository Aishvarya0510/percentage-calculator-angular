import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExplanationComponent } from './explanation/explanation.component';

const routes: Routes = [
  {
    path:'', redirectTo:'calculator',pathMatch:'full'
  },
  {
    path:'calculator',component:CalculatorComponent
  },
  {
    path:'aboutus',component:AboutUsComponent
  },
  {
    path:'explanation',component:ExplanationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
