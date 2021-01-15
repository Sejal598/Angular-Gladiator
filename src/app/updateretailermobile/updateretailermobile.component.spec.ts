import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateretailermobileComponent } from './updateretailermobile.component';

describe('UpdateretailermobileComponent', () => {
  let component: UpdateretailermobileComponent;
  let fixture: ComponentFixture<UpdateretailermobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateretailermobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateretailermobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
