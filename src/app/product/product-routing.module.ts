import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path : '', component : ProductComponent,
    children:[
      { path : 'list', component : ListComponent},
      { path : 'add', component : AddComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
