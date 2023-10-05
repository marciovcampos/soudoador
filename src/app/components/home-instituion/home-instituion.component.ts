import { Component } from '@angular/core';

@Component({
  selector: 'app-home-instituion',
  templateUrl: './home-instituion.component.html',
  styleUrls: ['./home-instituion.component.scss'],
})
export class HomeInstituionComponent {
  cards = [
    { name: 'Card 1', image: 'assets/logo.svg' },
    { name: 'Card 2', image: 'assets/logo.svg' },
    { name: 'Card 3', image: 'assets/logo.svg' },
    { name: 'Card 4', image: 'assets/logo.svg' },
  ];
}
