import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituionListComponent } from './instituion-list.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfigMock } from 'src/app/shared/mock-data';

describe('InstituionListComponent', () => {
  let component: InstituionListComponent;
  let fixture: ComponentFixture<InstituionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituionListComponent],
      imports: [
        AngularFireModule.initializeApp(firebaseConfigMock),
        AngularFirestoreModule,
      ],
    });
    fixture = TestBed.createComponent(InstituionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
