import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable()
export class StudentService {

  constructor(private http : HttpClient) { }

  public getStudent() : Observable<any>{
    return this.http.get('http://localhost:3000/student');
  }
}
