import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { DymanicPageComponent } from './pages/dymanic-page/dymanic-page.component';





@NgModule({
  declarations: [
    BasicPageComponent,
    DymanicPageComponent,
    SwitchesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ReactiveModule { }