import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { WhereDonateComponent } from './where-donate.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';

describe('WhereDonateComponent', () => {
  let component: WhereDonateComponent;
  let fixture: ComponentFixture<WhereDonateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhereDonateComponent, PageTitleComponent],
      imports: [MatChipsModule],
    });
    fixture = TestBed.createComponent(WhereDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
