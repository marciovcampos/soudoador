import { Component } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.model';

const menuItems: MenuItem[] = [
  { label: 'Campanhas', link: '/campanhas' },
  { label: 'Onde doar', link: '/onde-doar' },
  { label: 'FAQ', link: '/faq' },
  { label: 'Sobre', link: '/sobre' },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems = menuItems;
}
