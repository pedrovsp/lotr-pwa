import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuStatus: BehaviorSubject<boolean>;

  constructor() {
    this.menuStatus = new BehaviorSubject<boolean>(false);
  }

  public openCloseMenu(): void {
    this.menuStatus.next(!this.menuStatus.getValue());
    console.log('Is menu open: ', this.isMenuOpen());
  }

  public isMenuOpen(): boolean {
    return this.menuStatus.getValue();
  }
}
