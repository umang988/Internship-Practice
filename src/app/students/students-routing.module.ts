import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListContainerComponent } from './student-list-container/student-list-container.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [{ path: '', component: StudentsComponent,
  children : [
    { path : 'list', component : StudentListContainerComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
