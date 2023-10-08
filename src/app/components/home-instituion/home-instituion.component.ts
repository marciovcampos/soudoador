import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Instituion } from 'src/app/model/instituion';

@Component({
  selector: 'app-home-instituion',
  templateUrl: './home-instituion.component.html',
  styleUrls: ['./home-instituion.component.scss'],
})
export class HomeInstituionComponent implements OnInit {
  institutions?: Instituion[];

  constructor(public service: FirebaseService) {}

  ngOnInit() {
    this.getAllInstituions();
  }

  getAllInstituions(): void {
    this.service.getAllInstitutions().subscribe((data) => {
      this.institutions = [...data, ...data];
    });
  }
}
