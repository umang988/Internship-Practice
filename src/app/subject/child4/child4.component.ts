import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject-service/subject.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

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
