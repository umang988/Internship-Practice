import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeObj : any;
  confirmationString : string = "New employee has been added";
  isAdded : boolean = false;

  constructor(private http : HttpClient ) {
   }

  ngOnInit(): void {
  }

  addEmployee(formObj){
    this.employeeObj = formObj;
    console.log(this.employeeObj);
    this.http.post("http://localhost:3000/Employees",this.employeeObj).subscribe((res : Response) => {
      this.isAdded = true;
    })
  }

}
