import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-templating',
  templateUrl: './dynamic-templating.component.html',
  styleUrls: ['./dynamic-templating.component.css']
})
export class DynamicTemplatingComponent implements OnInit {

  constructor() { }

  public ali : Object = {
    $implicit : 'Ali',
    name : 'Is',
    lname : 'Don'
  }

  ngOnInit(): void {
  }

}
