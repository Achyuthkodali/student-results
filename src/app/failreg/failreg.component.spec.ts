import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailregComponent } from './failreg.component';

describe('FailregComponent', () => {
  let component: FailregComponent;
  let fixture: ComponentFixture<FailregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
