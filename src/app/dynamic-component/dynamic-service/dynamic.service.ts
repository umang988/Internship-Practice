import { Injectable, ComponentRef } from '@angular/core';
import { HinataComponent } from '../hinata/hinata.component';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { User } from '../user';

@Injectable()
export class DynamicService {

  public user : User ;

  constructor(public overlay : Overlay ) { }

  viewOverlay(hinataRef,user){
    const componentRef : ComponentRef<HinataComponent> = this.overlayConfig(hinataRef,user);
  }

  overlayConfig(hinataRef,user) : ComponentRef<HinataComponent>{

    const overlayConfig : OverlayConfig = new OverlayConfig();

    overlayConfig.positionStrategy = this.overlay.position().flexibleConnectedTo(hinataRef)
      .withPositions(
        [
          {
            panelClass: 'top-right',
            originX: 'start',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetX: 19,


            // originX: 'center',
            // originY: 'center',
            // overlayX: 'center',
            // overlayY: 'center'
          }
        ]
      );

  overlayConfig.hasBackdrop = true;

  const overlayRef = this.overlay.create(overlayConfig);
  const portal: ComponentPortal<HinataComponent> = new ComponentPortal<HinataComponent>(HinataComponent);
  const componentRef: ComponentRef<HinataComponent> = overlayRef.attach(portal);
  componentRef.instance.hinataData = user;
  overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    return componentRef;
  }
}
