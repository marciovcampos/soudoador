import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqListComponent } from './faq-list.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfigMock } from 'src/app/shared/mock-data';

describe('FaqListComponent', () => {
  let component: FaqListComponent;
  let fixture: ComponentFixture<FaqListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqListComponent],
      imports: [
        AngularFireModule.initializeApp(firebaseConfigMock),
        AngularFirestoreModule,
      ],
    });
    fixture = TestBed.createComponent(FaqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
