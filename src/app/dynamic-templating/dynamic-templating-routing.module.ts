import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTemplatingComponent } from './dynamic-templating.component';

const routes: Routes = [{ path: '', component: DynamicTemplatingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicTemplatingRoutingModule { }
