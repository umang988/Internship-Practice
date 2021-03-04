import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinataComponent } from './hinata.component';

describe('HinataComponent', () => {
  let component: HinataComponent;
  let fixture: ComponentFixture<HinataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HinataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HinataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
