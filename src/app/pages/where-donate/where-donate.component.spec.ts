import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereDonateComponent } from './where-donate.component';

describe('WhereDonateComponent', () => {
  let component: WhereDonateComponent;
  let fixture: ComponentFixture<WhereDonateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhereDonateComponent]
    });
    fixture = TestBed.createComponent(WhereDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});