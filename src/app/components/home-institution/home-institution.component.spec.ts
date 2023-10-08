import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstitutionComponent } from './home-institution.component';

import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfigMock } from 'src/app/shared/mock-data';

describe('HomeInstitutionComponent', () => {
  let component: HomeInstitutionComponent;
  let fixture: ComponentFixture<HomeInstitutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeInstitutionComponent],
      imports: [
        MatCardModule,
        AngularFireModule.initializeApp(firebaseConfigMock),
        AngularFirestoreModule,
      ],
    });
    fixture = TestBed.createComponent(HomeInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
