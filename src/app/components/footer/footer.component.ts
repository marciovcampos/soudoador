import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/menu-item.model';

const menuItems: MenuItem[] = [
  { label: 'Contato', link: '/contato' },
  { label: 'Sobre', link: '/sobre' },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  menuItems = menuItems;
}
