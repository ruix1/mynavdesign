import { Component } from '@angular/core';
import { NavserviceService } from './Navigation/navservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showpanel: boolean;
  constructor(private _navservice: NavserviceService) {
    this._navservice.SubIcon.subscribe((data) => {
      this.showpanel = data;
      console.log(data);
    });
  }
  title = 'my-design';
}
