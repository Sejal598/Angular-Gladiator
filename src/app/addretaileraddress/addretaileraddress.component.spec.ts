import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddretaileraddressComponent } from './addretaileraddress.component';

describe('AddretaileraddressComponent', () => {
  let component: AddretaileraddressComponent;
  let fixture: ComponentFixture<AddretaileraddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddretaileraddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddretaileraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
