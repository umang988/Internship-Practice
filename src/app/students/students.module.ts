import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { AddContainerComponent } from './student-add-container/student-add-container.component';
import { StudentAddPresentationComponent } from './student-add-container/student-add-presentation/student-add-presentation.component';
import { StudentListContainerComponent } from './student-list-container/student-list-container.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [StudentsComponent, AddContainerComponent, StudentAddPresentationComponent, StudentListContainerComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
