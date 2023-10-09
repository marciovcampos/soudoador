import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { TwoColumnLayoutComponent } from 'src/app/components/two-column-layout/two-column-layout.component';

import { firebaseConfigMock } from 'src/app/shared/mock-data';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder],
      declarations: [
        RegistrationComponent,
        PageTitleComponent,
        TwoColumnLayoutComponent,
      ],
      imports: [
        AngularFireModule.initializeApp(firebaseConfigMock),
        AngularFirestoreModule,
        BrowserAnimationsModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
