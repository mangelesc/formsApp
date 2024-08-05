import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { DymanicPageComponent } from './pages/dymanic-page/dymanic-page.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {path: 'basic', component: BasicPageComponent},
      {path: 'dynamic', component: DymanicPageComponent},
      {path: 'switches', component: SwitchesPageComponent},
      {path: '**', redirectTo: 'basic'},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
