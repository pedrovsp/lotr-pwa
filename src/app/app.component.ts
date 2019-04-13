import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pwa-lotr';
  offlinePage = false;

  ngOnInit() {
    if (!navigator.onLine) {
      this.offlinePage = true;
    }
  }
}
