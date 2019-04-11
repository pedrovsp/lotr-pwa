import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMenuOpened = false;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  openCloseMenu() {
    this.menuService.openCloseMenu();
  }
}
