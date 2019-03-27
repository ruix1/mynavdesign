import { Component, OnInit } from '@angular/core';
import { menu } from '../../../assets/data/defaultmenu';

@Component({
  selector: 'app-navpanel',
  templateUrl: './navpanel.component.html',
  styleUrls: ['./navpanel.component.css'],
  providers: [menu]
})
export class NavpanelComponent implements OnInit {

  menus: any[];
  constructor(private _menu: menu) {
    this.menus = this._menu.menudata;

  }

  ngOnInit() {

  }

}
