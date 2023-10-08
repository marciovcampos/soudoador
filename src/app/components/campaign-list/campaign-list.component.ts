import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Campaign } from 'src/app/model/campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
})
export class CampaignListComponent implements OnInit {
  campaigns?: Campaign[];

  constructor(public service: FirebaseService) {}

  ngOnInit() {
    this.getAllCampaigns();
  }

  getAllCampaigns(): void {
    this.service.getAllCampaigns().subscribe((data) => {
      this.campaigns = data;
    });
  }
}
