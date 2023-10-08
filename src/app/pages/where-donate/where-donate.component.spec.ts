import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { WhereDonateComponent } from './where-donate.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { InstitutionListComponent } from 'src/app/components/institution-list/institution-list.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfigMock } from 'src/app/shared/mock-data';

describe('WhereDonateComponent', () => {
  let component: WhereDonateComponent;
  let fixture: ComponentFixture<WhereDonateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WhereDonateComponent,
        PageTitleComponent,
        InstitutionListComponent,
      ],
      imports: [
        MatChipsModule,
        AngularFireModule.initializeApp(firebaseConfigMock),
        AngularFirestoreModule,
      ],
    });
    fixture = TestBed.createComponent(WhereDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
