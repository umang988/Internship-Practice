import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'employee', loadChildren : () => import('./employee/employee.module').then(m => m.EmployeeModule)},
  { path : 'product', loadChildren : () => import('./product/product.module').then(p => p.ProductModule)},
  { path: 'student', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
  { path: 'forkJoin', loadChildren: () => import('./fork-join/fork-join.module').then(m => m.ForkJoinModule) },
  { path: 'dynamic', loadChildren: () => import('./dynamic-templating/dynamic-templating.module').then(m => m.DynamicTemplatingModule) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
