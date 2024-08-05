import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPAgeComponent } from './pages/registerPAge/registerPAge.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {path: 'sign-up', component: RegisterPAgeComponent},
      {path: '**', redirectTo: 'sign-up'},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
