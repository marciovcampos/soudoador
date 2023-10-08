import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Faq } from 'src/app/model/faq';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss'],
})
export class FaqListComponent implements OnInit {
  faqs?: Faq[];

  constructor(public service: FirebaseService) {}

  ngOnInit() {
    this.getAllFaq();
  }

  getAllFaq(): void {
    this.service.getAllFaq().subscribe((data) => {
      this.faqs = data;
    });
  }
}
