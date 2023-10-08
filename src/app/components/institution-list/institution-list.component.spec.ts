import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionListComponent } from './institution-list.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfigMock } from 'src/app/shared/mock-data';

describe('InstitutionListComponent', () => {
  let component: InstitutionListComponent;
  let fixture: ComponentFixture<InstitutionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionListComponent],
      imports: [
        AngularFireModule.initializeApp(firebaseConfigMock),
        AngularFirestoreModule,
      ],
    });
    fixture = TestBed.createComponent(InstitutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
