import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { RegistrationComponent } from './registration.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { TwoColumnLayoutComponent } from 'src/app/components/two-column-layout/two-column-layout.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationComponent,
        PageTitleComponent,
        TwoColumnLayoutComponent,
      ],
      imports: [MatChipsModule],
    });
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
