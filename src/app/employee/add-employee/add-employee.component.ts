import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, Details } from '../employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeObj : Employee = new Employee();
  confirmationString : string = "New employee has been added";
  isAdded : boolean = false;
  
  @ViewChild('addForm') addForm:NgForm;

  constructor(private router : Router ,private http : HttpClient ,private route : ActivatedRoute) {
    const id = route.snapshot.paramMap.get('id');
    if(id){
      this.getEmployeeDetail(+id);
    }
   }

  ngOnInit(): void {
  }

  addEmployee(formObj){
    this.employeeObj = formObj;
    console.log(this.employeeObj);
    this.http.post("http://localhost:3000/Employees",this.employeeObj).subscribe((res : Response) => {
      // this.isAdded = true;
      this.router.navigate(['../list'])
    })
  }

  getEmployeeDetail(id){
    this.http.get("http://localhost:3000/Employees"+'/'+id).subscribe(
      (res : Response) => {
        console.log(res)
        this.setEmployeeValue(res);
      }
    );
  }

  setEmployeeValue(res){
    this.addForm.form.patchValue(res)
  }

}
