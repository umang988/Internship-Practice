import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-hinata',
  templateUrl: './hinata.component.html',
  styleUrls: ['./hinata.component.css']
})
export class HinataComponent implements OnInit {

  constructor() { }

  hinataData : User;
  
  ngOnInit(): void {
  }

}
