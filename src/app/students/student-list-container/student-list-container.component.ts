import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list-container',
  templateUrl: './student-list-container.component.html',
  styleUrls: ['./student-list-container.component.css']
})
export class StudentListContainerComponent implements OnInit {
  data: any;
  students : Student = {
    id : null,
    name : null,
    age : null,
    gender : null,
    address : null,
  };

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
    this.getData();
  }

  public getData() : void{
    this.data = this.studentService.getStudent()
    .subscribe((data) => {
      console.log("Data : ",data);
      
      this.students = data;
      console.log(this.students[0].id);
    });
  }

}
