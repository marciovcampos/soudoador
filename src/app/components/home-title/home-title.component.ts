import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.scss'],
})
export class HomeTitleComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
