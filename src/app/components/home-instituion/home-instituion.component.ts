import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Instituion } from 'src/app/shared/instituion';

@Component({
  selector: 'app-home-instituion',
  templateUrl: './home-instituion.component.html',
  styleUrls: ['./home-instituion.component.scss'],
})
export class HomeInstituionComponent implements OnInit {
  cards = [
    { name: 'Card 1', image: 'assets/logo.svg' },
    { name: 'Card 2', image: 'assets/logo.svg' },
    { name: 'Card 3', image: 'assets/logo.svg' },
    { name: 'Card 4', image: 'assets/logo.svg' },
  ];

  institutions?: Instituion[];

  constructor(public service: FirebaseService) {}

  ngOnInit() {
    this.getAllInstituions();
  }

  getAllInstituions(): void {
    this.service
      .getAllInstituions()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.institutions = [...data, ...data];
      });
  }
}
