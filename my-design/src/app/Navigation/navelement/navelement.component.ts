import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navelement',
  templateUrl: './navelement.component.html',
  styleUrls: ['./navelement.component.css']
})
export class NavelementComponent implements OnInit {

  @Input() element: String;
  btnIcon: String;
  btnClick: boolean = true;

  constructor() {
    this.btnIcon = "../../../assets/icon/plus-solid.svg";
    this.btnClick = !this.btnClick;
  }

  ngOnInit() {
  }

  btn_click() {
    if (this.btnClick) {
      this.btnIcon = "../../../assets/icon/plus-solid.svg";
      this.btnClick = !this.btnClick;
    } else {
      this.btnIcon = "../../../assets/icon/times-solid.svg";
      this.btnClick = !this.btnClick;
    }
  }

}


