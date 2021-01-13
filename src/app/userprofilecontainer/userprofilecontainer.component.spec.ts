import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilecontainerComponent } from './userprofilecontainer.component';

describe('UserprofilecontainerComponent', () => {
  let component: UserprofilecontainerComponent;
  let fixture: ComponentFixture<UserprofilecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprofilecontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
