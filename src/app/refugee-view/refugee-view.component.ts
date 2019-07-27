import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { TaskEntry }    from '../task-entry';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {TranslateService} from '../translate.service';
//import {taskTitle, taskSummary, address, currentLang} from ../LoginFormComponent;

@Component({
  selector: 'app-refugee-view',
  templateUrl: './refugee-view.component.html',
  styleUrls: ['./refugee-view.component.css']
})

export class RefugeeViewComponent implements OnInit {
  taskTitle_label = ""
  taskSummary_label = ""
  address_label = ""
  currentLang_label = ""
  email_label = ""
  date_label = ""
  time_label = ""
  city_label = ""
  state_label = ""
  
  taskTitle = '';
  taskSummary = '';
  address = '';
  language = '';
  date: Date;
  email = '';
  task: TaskEntry;

  postAProb = 'Post a Problem';
  
  ngOnInit() {
  }
 
  constructor(private router:Router, private http:HttpClient, private translateService:TranslateService) { 
    this.taskTitle_label = translateService.taskTitle;
    this.taskSummary_label = translateService.taskSummary;
    this.address_label = translateService.address;
    this.currentLang_label = translateService.currentLang;
    this.email_label = translateService.email;
    this.date_label = translateService.date;
    this.time_label = translateService.time;
    this.city_label = translateService.city;
    this.state_label = translateService.state;
    this.postAProb = translateService.postAProb;
  }
 

  submitted = false;
  onSubmit() { 
      this.taskSummary = (<HTMLTextAreaElement>document.getElementById("task_summary")).value;
      var new_task = new TaskEntry(this.taskTitle, this.taskSummary, this.address, this.language, this.date, Date.now(), this.email, 1);

      this.http.post('/submit_task', {"task": new_task}).subscribe(result => {
        
        // Parse Json result
        var res = result['message'];
        console.log(res);
        if(res == 'Success')
          this.router.navigate(['postconfirmation']);
        this.submitted = true; 
      })
  }

  logout() {
    // this.newUser = this.user.createUserObject(this.username, this.password, this.firstName, this.lastName);
    this.router.navigate(['']);
    // this.http.post('/logout', {}).subscribe((result) => {
    //   this.router.navigate(['home']);
    // })
  }
}

