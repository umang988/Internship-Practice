import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTemplatingRoutingModule } from './dynamic-templating-routing.module';
import { DynamicTemplatingComponent } from './dynamic-templating.component';


@NgModule({
  declarations: [DynamicTemplatingComponent],
  imports: [
    CommonModule,
    DynamicTemplatingRoutingModule
  ]
})
export class DynamicTemplatingModule { }
