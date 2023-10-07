import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstituionComponent } from './home-instituion.component';

import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfigMock } from 'src/app/shared/mock-data';

describe('HomeInstituionComponent', () => {
  let component: HomeInstituionComponent;
  let fixture: ComponentFixture<HomeInstituionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeInstituionComponent],
      imports: [
        MatCardModule,
        AngularFireModule.initializeApp(firebaseConfigMock),
        AngularFirestoreModule,
      ],
    });
    fixture = TestBed.createComponent(HomeInstituionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});