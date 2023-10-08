import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfigMock } from 'src/app/shared/mock-data';

import { CampaignsComponent } from './campaigns.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { CampaignListComponent } from 'src/app/components/campaign-list/campaign-list.component';

describe('CampaignsComponent', () => {
  let component: CampaignsComponent;
  let fixture: ComponentFixture<CampaignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CampaignsComponent,
        PageTitleComponent,
        CampaignListComponent,
      ],
      imports: [
        MatChipsModule,
        AngularFireModule.initializeApp(firebaseConfigMock),
        AngularFirestoreModule,
      ],
    });
    fixture = TestBed.createComponent(CampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
