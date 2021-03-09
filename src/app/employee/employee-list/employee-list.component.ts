import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeData : Employee;

  id : number;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  
  constructor(private http : HttpClient,private router : Router) {
    
   }

   getData = function(){
    this.http.get("http://localhost:3000/Employees").subscribe(
      (res : Response) => {
        this.employeeData = res;
        console.log(this.employeeData)
      }
    );
   }

   deleteEmployee = function(id) {
     if(confirm("Are you sure ? ")){
       const url = ` ${"http://localhost:3000/Employees"}/${id} `;
       return this.http.delete(url, { headers : this.headers }).toPromise()
       .then(() => {
         this.getData();
       })
     }
   }

   editEmployee(id){
     this.router.navigate(['../employee/edit',id])
   }

  ngOnInit(): void {
    this.getData();
    console.log(this.employeeData)
  }

}
