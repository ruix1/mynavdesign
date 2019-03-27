import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NavserviceService {

  SubIcon = new BehaviorSubject<boolean>(true);

  constructor() {
  }
}
