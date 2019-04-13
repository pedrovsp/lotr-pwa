import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'LotR';
  offlinePage = false;

  constructor() {

  }

  ngOnInit() {
    this.handleConnection();
    window.addEventListener('online', () => { this.handleConnection(); location.reload(); } );
    window.addEventListener('offline', () => { this.handleConnection(); location.reload(); } );
  }

  handleConnection() {
    console.log('navigator.onLine:', navigator.onLine);
    if (navigator.onLine) {
      this.offlinePage = false;
    } else {
      this.offlinePage = true;
    }
  }
}
