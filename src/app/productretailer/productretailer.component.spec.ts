import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductretailerComponent } from './productretailer.component';

describe('ProductretailerComponent', () => {
  let component: ProductretailerComponent;
  let fixture: ComponentFixture<ProductretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductretailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
