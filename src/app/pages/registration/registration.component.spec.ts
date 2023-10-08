import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { TwoColumnLayoutComponent } from 'src/app/components/two-column-layout/two-column-layout.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

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
        BrowserAnimationsModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,
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
