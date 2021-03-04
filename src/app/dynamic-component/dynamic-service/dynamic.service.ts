import { Injectable, ComponentRef } from '@angular/core';
import { HinataComponent } from '../hinata/hinata.component';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable()
export class DynamicService {

  constructor(public overlay : Overlay ) { }

  viewOverlay(hinataRef){
    const componentRef : ComponentRef<HinataComponent> = this.overlayConfig(hinataRef);
  }

  overlayConfig(hinataRef) : ComponentRef<HinataComponent>{

    const overlayConfig : OverlayConfig = new OverlayConfig();

    overlayConfig.positionStrategy = this.overlay.position().global()
    .centerHorizontally()
    .centerVertically();

  overlayConfig.hasBackdrop = true;

  const overlayRef = this.overlay.create(overlayConfig);
  const portal: ComponentPortal<HinataComponent> = new ComponentPortal<HinataComponent>(HinataComponent);
  const componentRef: ComponentRef<HinataComponent> = overlayRef.attach(portal);

  overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    return componentRef;
  }
}
