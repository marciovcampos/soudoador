import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { FaqComponent } from './faq.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { FaqListComponent } from 'src/app/components/faq-list/faq-list.component';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqComponent, PageTitleComponent, FaqListComponent],
      imports: [MatChipsModule],
    });
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
