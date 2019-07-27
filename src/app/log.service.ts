import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {UserService} from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private serverMessage = '';

  constructor(private http:HttpClient, private router:Router, private user:UserService) {}
  getServerMessage() {
    return this.serverMessage;
  }

  insertLog(username: string, time: string, userEvent: string) {
    this.http.post('/insertLog', {username: username, timestamp: time, userEvent: userEvent}).subscribe(result => {
      this.serverMessage = result['message'];
    }) 
  }

  // Returns a promise with all LogObject(s) from the database
  getAllLogs() {
    return this.http.post('/getAllLogs', {}).toPromise();
  }
}
