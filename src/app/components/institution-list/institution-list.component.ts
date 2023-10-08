import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Institution } from 'src/app/model/institution';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss'],
})
export class InstitutionListComponent implements OnInit {
  institutions?: Institution[];

  constructor(public service: FirebaseService) {}

  ngOnInit() {
    this.getAllInstitutions();
  }

  getAllInstitutions(): void {
    this.service.getAllInstitutions().subscribe((data) => {
      this.institutions = data;
    });
  }
}
