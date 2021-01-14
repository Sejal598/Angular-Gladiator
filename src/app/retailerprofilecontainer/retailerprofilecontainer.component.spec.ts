import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerprofilecontainerComponent } from './retailerprofilecontainer.component';

describe('RetailerprofilecontainerComponent', () => {
  let component: RetailerprofilecontainerComponent;
  let fixture: ComponentFixture<RetailerprofilecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerprofilecontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerprofilecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
