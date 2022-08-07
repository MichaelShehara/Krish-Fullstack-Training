import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOrderStatusComponent } from './check-order-status.component';

describe('CheckOrderStatusComponent', () => {
  let component: CheckOrderStatusComponent;
  let fixture: ComponentFixture<CheckOrderStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOrderStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
