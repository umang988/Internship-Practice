import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-naruto',
  templateUrl: './naruto.component.html',
  styleUrls: ['./naruto.component.css']
})
export class NarutoComponent implements OnInit {

  @Input() name : string ; 

  constructor() { }

  ngOnInit(): void {
  }

}
