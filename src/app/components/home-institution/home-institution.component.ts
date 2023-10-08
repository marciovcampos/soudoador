import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Institution } from 'src/app/model/institution';

@Component({
  selector: 'app-home-institution',
  templateUrl: './home-institution.component.html',
  styleUrls: ['./home-institution.component.scss'],
})
export class HomeInstitutionComponent implements OnInit {
  institutions?: Institution[];

  constructor(public service: FirebaseService) {}

  ngOnInit() {
    this.getAllInstitutions();
  }

  getAllInstitutions(): void {
    this.service.getAllInstitutions().subscribe((data) => {
      this.institutions = [...data, ...data];
    });
  }
}
