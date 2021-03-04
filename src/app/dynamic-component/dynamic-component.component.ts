import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef, ViewChild } from '@angular/core';
import { NarutoComponent } from './naruto/naruto.component';
import { User } from './user';
import { DynamicService } from './dynamic-service/dynamic.service';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {

  public user : User = {
    name : "umang",
    age : 21,
  }

  constructor(private factoryResolver : ComponentFactoryResolver, private vcr : ViewContainerRef, private dynamicService : DynamicService) { }

  dynoRef  : ComponentRef<any>;
  @ViewChild('narutoContainer', { read : ViewContainerRef }) narutoContainer : ViewContainerRef;


  ngOnInit(): void {
    this.dynamicService.overlayConfig
  }

  loadNaruto(){
    if(this.dynoRef){
      this.dynoRef.destroy();
    }
    const narutoComponent = this.factoryResolver.resolveComponentFactory<NarutoComponent>(NarutoComponent);
    this.dynoRef = this.narutoContainer.createComponent<NarutoComponent>(narutoComponent);
    this.dynoRef.instance.name = 'Naruto aagbuagdf';
    // this.dynoRef.instance.destroy.subscribe(() => this.dynoRef.destroy());
  }

  callHinata(name : string,hinataRef){
    console.log(name);
    this.dynamicService.viewOverlay(hinataRef);
    
  }

}
