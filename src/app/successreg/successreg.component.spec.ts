import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessregComponent } from './successreg.component';

describe('SuccessregComponent', () => {
  let component: SuccessregComponent;
  let fixture: ComponentFixture<SuccessregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
