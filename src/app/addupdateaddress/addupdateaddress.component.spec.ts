import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdateaddressComponent } from './addupdateaddress.component';

describe('AddupdateaddressComponent', () => {
  let component: AddupdateaddressComponent;
  let fixture: ComponentFixture<AddupdateaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddupdateaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdateaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
