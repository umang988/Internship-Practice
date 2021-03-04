import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject-service/subject.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  username : string;

  constructor(private subjectService : SubjectService) { }

  ngOnInit(): void {
    this.subjectService.username.subscribe( uname => {
      this.username = uname;
    })
  }
  updateName(uname){
    this.subjectService.username.next(uname.value)
  }

}
