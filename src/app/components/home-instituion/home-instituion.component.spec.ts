import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstituionComponent } from './home-instituion.component';
import { MatCardModule } from '@angular/material/card';

describe('HomeInstituionComponent', () => {
  let component: HomeInstituionComponent;
  let fixture: ComponentFixture<HomeInstituionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeInstituionComponent],
      imports: [MatCardModule],
    });
    fixture = TestBed.createComponent(HomeInstituionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
