import { Component, Inject } from '@angular/core';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
import {HttpClient} from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(private idle: Idle, private keepalive: Keepalive, private http:HttpClient, private user:UserService) {
    // Idle timeout warning pops up after 19 minutes
    idle.setIdle(1740);
    // idle.setIdle(5);
    // Sets a timeout period of 60 seconds. After 30 minutes of inactivity, the user will be considered timed out.
    idle.setTimeout(60);
    // idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.';
      this.display='none';
    });
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.display='none';
      this.user.logOutCurrentUser();
    });
    idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!';
      this.display='block';
    });
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will be logged out in ' + countdown + ' seconds!');

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
  }

  display='none';

  ngOnInit() {
    this.display='none'; 
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.display='none'; 
    this.timedOut = false;
  }

  logoutUser() {
    this.display='none'; 
    this.user.logOutCurrentUser();
  }

  onCloseHandled() {
    this.display='none';
  }
}
