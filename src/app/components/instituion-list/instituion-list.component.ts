import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Instituion } from 'src/app/shared/instituion';

@Component({
  selector: 'app-instituion-list',
  templateUrl: './instituion-list.component.html',
  styleUrls: ['./instituion-list.component.scss'],
})
export class InstituionListComponent implements OnInit {
  institutions?: Instituion[];

  constructor(public service: FirebaseService) {}

  ngOnInit() {
    this.getAllInstituions();
  }

  getAllInstituions(): void {
    this.service.getAllInstituions().subscribe((data) => {
      this.institutions = data;
    });
  }
}
