import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() menuItems: MenuItem[] = [];
}
