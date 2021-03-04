import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip ,combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit, AfterViewInit {

  nameSource :string[] =  ['Umang', 'Pratik', 'Ali', 'Devanshi', 'Hiren', 'Anjali'];

  colorSource : string[] = [' purple', 'red' , 'yellow', 'green' , 'blue', 'pink'];

  @ViewChild('name') name:ElementRef;
  @ViewChild('color') color:ElementRef; 

  constructor() { }

  ngAfterViewInit(){
    const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(
      map(event => event.target.value),take(3)
    );
    
    const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(
      map(event => event.target.value),take(2)
    )

    //zip
    zip(nameObs,colorObs).subscribe(([name,color]) => {
      console.log(name,color);
      this.createBox(name,color,'elContainer');
    })

    forkJoin([nameObs,colorObs]).subscribe(([name,color]) => {
      console.log(name,color);
      this.createBox(name,color,'elContainer2');
    })

    combineLatest([nameObs,colorObs]).subscribe(
      ([name,color]) => {
      console.log(name,color);
      this.createBox(name,color,'elContainer3');
    })
  }

  createBox(name,color,containerId){
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("class",color);
    el.style.backgroundColor = color;
    el.style.padding = '5px';
    el.style.width = '100px';    
    document.getElementById(containerId).appendChild(el);
  }

  ngOnInit(): void {
    
  }

}
