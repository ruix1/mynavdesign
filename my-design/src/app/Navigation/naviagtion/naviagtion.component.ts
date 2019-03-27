
import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { NavserviceService } from '../navservice.service';


@Component({
  selector: 'app-naviagtion',
  templateUrl: './naviagtion.component.html',
  styleUrls: ['./naviagtion.component.css']
})
export class NaviagtionComponent implements OnInit {

  BtnLf: String;
  CurNav: boolean = true;
  NavTitle: String;

  constructor(private _navservice: NavserviceService) {
    this._navservice.SubIcon.subscribe((data) => {
      if (data) {
        this.NavTitle = "Talent Point";
        this.BtnLf = "../../../assets/icon/equals-solid.svg";
      } else {
        this.NavTitle = "Recruitment";
        this.BtnLf = "../../../assets/icon/times-solid.svg";
      }
    });
  }

  ngOnInit() {

  }

  LoadNav() {
    this.CurNav = !this.CurNav;
    this._navservice.SubIcon.next(this.CurNav);
  }
  ChangeIcon() {

  }

}