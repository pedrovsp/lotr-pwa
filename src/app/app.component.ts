import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'LotR';
  offlinePage = false;
  readonly VAPID_PUBLIC_KEY = 'BO4QXponQpWcci9VHrEYVofUEAfDyzw76xzRSFNiMrEfPKZMlXGBfienJt3hm7vVOr7R7-s0OAjybEXZNX69pMQ';

  constructor(
    private swPush: SwPush,
    private http: HttpClient) {
  }

  ngOnInit() {
    // this.subscribeToNotifications();
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

  subscribeToNotifications() {

    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub =>  this.http.post('http://localhost:9090/api/subscribe', sub).subscribe())
    .catch(err => console.error('Could not subscribe to notifications', err));
}
}
