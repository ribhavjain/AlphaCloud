import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-singletask',
  templateUrl: './singletask.component.html',
  styleUrls: ['./singletask.component.css']
})

export class SingletaskComponent implements OnInit {

  
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { }
  task_id: string;
  task: any;
  org_id: number;
  emailr: string;
  
  title: string;
  name: string;
  language: string;
  summary: string;
  category: string;
  due_date: Date;
  location: string;
  postdate: Date;

  emailv: string;

  
  ngOnInit() {
    this.task_id = this.route.snapshot.params['task_id'];
    console.log(this.task_id)
    this.http.post('/getOneTasks', {'task_id': this.task_id}).subscribe(result => {
            this.task = result[0];
            console.log(result[0])
            this.emailr = this.task['email']
          this.title = this.task['task_title']
          // this.name = this.task['name']
          // this.language = this.task['language']
          this.summary = this.task['task_summary']
          // this.category = this.task['category']
          this.postdate = this.task['post_date']
      })
  }

  goNext() {
    this.router.navigate(['main'])
  }
  
  sendIt() {
    console.log(this.emailv, "Got it")
    this.http.post('/submittaskaccepted',{'emailv': this.emailv, 'emailr': this.emailr}).subscribe(result => {
      this.task = result;
      })
    this.router.navigate(['/'])
  }

  logout() {
    // this.newUser = this.user.createUserObject(this.username, this.password, this.firstName, this.lastName);
    this.router.navigate(['']);
    // this.http.post('/logout', {}).subscribe((result) => {
    //   this.router.navigate(['home']);
    // })
  }

}
