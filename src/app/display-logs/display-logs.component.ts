import { Component, OnInit } from '@angular/core';
import { LogObject } from '../logobject';
import { LogService } from '../log.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-display-logs',
  templateUrl: './display-logs.component.html',
  styleUrls: ['./display-logs.component.css']
})
export class DisplayLogsComponent implements OnInit {

  //Data
  allLogs:LogObject[];
  username="";
  event="";
  id="";
  timestamp="";

  constructor(private http:HttpClient, private logService:LogService) { }

  ngOnInit() {
    this.logService.getAllLogs().then(res => {
      this.allLogs = res['allLogs'] as LogObject[];
    })
  }
}
