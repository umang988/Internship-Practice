import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { DynamicComponentComponent } from './dynamic-component.component';
import { NarutoComponent } from './naruto/naruto.component';
import { HinataComponent } from './hinata/hinata.component';
import { DynamicService } from './dynamic-service/dynamic.service';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [DynamicComponentComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentRoutingModule,
    OverlayModule
  ],

  entryComponents : [
    NarutoComponent,
    HinataComponent
  ],
  providers : [
    DynamicService,
  ]

})
export class DynamicComponentModule { }
