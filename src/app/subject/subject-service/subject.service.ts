import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  // name = new Subject<any>();

  username = new BehaviorSubject('Umang');

  constructor() { }
}
