import { Component } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.model';

const menuItems: MenuItem[] = [
  { label: 'Campanhas', link: '/campanhas' },
  { label: 'Onde doar', link: '/onde-doar' },
  { label: 'FAQ', link: '/faq' },
  { label: 'Cadastre-se', link: '/cadastro' },
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
