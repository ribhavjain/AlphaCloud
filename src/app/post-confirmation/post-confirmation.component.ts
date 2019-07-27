import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-confirmation',
  templateUrl: './post-confirmation.component.html',
  styleUrls: ['./post-confirmation.component.css']
})
export class PostConfirmationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['']);
  }
  task(){
    this.router.navigate(['posttask']);
  } 
}
