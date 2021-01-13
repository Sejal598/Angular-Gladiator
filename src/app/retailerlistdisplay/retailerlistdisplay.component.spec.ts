import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerlistdisplayComponent } from './retailerlistdisplay.component';

describe('RetailerlistdisplayComponent', () => {
  let component: RetailerlistdisplayComponent;
  let fixture: ComponentFixture<RetailerlistdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerlistdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerlistdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
