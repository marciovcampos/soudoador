import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeTitleComponent } from 'src/app/components/home-title/home-title.component';
import { HomeMessageComponent } from 'src/app/components/home-message/home-message.component';
import { HomeInstituionComponent } from 'src/app/components/home-instituion/home-instituion.component';

import { MatCardModule } from '@angular/material/card';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HomeTitleComponent,
        HomeMessageComponent,
        HomeInstituionComponent,
      ],
      imports: [MatCardModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
