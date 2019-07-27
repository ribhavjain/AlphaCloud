import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserObject } from '../userobject';
import { AdminType } from './admin-type';
import { LogService } from '../log.service';
import { HostListener } from '@angular/core';

/* AdminComponent is used to manage admin actions and cannot be seen by normal users
 * The list of admins are stored in the "adminList" collection as { adminUsername: "USER" }
 */

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  

//This is to bind HostListener ontop of ngDestroy to the close button
  @ViewChild('dismissButton') dismissButton;
  @ViewChild('dismissButton2') dismissButton2;

  // Data
  addServerMessage;
  removeServerMessage = '';
  emailServerMessage = '';
  usernameToAdd='';
  usernameToRemove='';
  emailRecipient='';
  currRoute='';
  fullUrl= '';
  currAdminList = [];
  currCreatorList = [];
  myUsername : string;
  userRole = "";
  adminUsername="";

  constructor(private http:HttpClient, private router:Router, private user:UserService, private logService:LogService) { }

  ngOnInit() {
    this.getAdminList();
    this.getCreatorList();
    this.currRoute = this.router.url;
    this.fullUrl = window.location.protocol + "//" + window.location.host +  window.location.pathname;
    this.user.getUser().subscribe(res => {
      this.myUsername = res['username'];
    })
  }
  @HostListener('window:beforeunload') //catches browser, window, tab, and page exits
  ngOnDestroy() {
      this.dismissButton.nativeElement.click();
      this.dismissButton2.nativeElement.click();
  }

  // Adds a survey creator to database
  addCreator(){
    // Empty fields(no name) cannot be inserted into adminList
    this.http.post('/checkIfUserExists', {usernameToAdd: this.usernameToAdd}).subscribe(result=> {
      if(result['doesExist'] === false){
        this.addServerMessage = "Please enter a valid name";
      }else{
        this.http.post('/findCreator', {admin: this.usernameToAdd}).subscribe(result => {
          if (result['creator'] == true) {
              this.addServerMessage = "Creator already added";
          } else {
                // HTTP call to add username to adminList
                this.http.post('/addCreator', { adminUsername : this.usernameToAdd}).subscribe(result => {
                  this.addServerMessage = result['message'];
                  setTimeout(function(){
                    this.addServerMessage = '';
                    console.log("message cleared");
                  }.bind(this),2000);
                  this.logService.insertLog(this.myUsername, Date(), "creator.added: " + this.usernameToAdd);
                  this.getCreatorList();
                }); 
              }
            });
          }
        })
  }

  // Removes creator username from database
  removeCreator(){
    this.http.post('/removeCreator', { adminUsername : this.usernameToRemove}).subscribe(result => {
      this.removeServerMessage = result['message'];
      setTimeout(function(){
        this.removeServerMessage = '';
        console.log("message cleared");
      }.bind(this),2000);
      this.logService.insertLog(this.myUsername, Date(), "creator.removed: " + this.usernameToRemove);
      this.getCreatorList();
    }); 
  }

  addAdmin(){
    // Empty fields(no name) cannot be inserted into adminList
    this.http.post('/checkIfUserExists', {usernameToAdd: this.usernameToAdd}).subscribe(result=> {
      if(result['doesExist'] === false){
        this.addServerMessage = "Please enter a valid name";
      }else{
        this.http.post('/findAdmin', {admin: this.usernameToAdd}).subscribe(result => {
          if (result['admin'] == true) {
              this.addServerMessage = "Admin already added";
          } else {
                // HTTP call to add username to adminList
                this.http.post('/addAdmin', { adminUsername : this.usernameToAdd}).subscribe(result => {
                  this.addServerMessage = result['message'];
                  setTimeout(function(){
                    this.addServerMessage = '';
                    console.log("message cleared");
                  }.bind(this),2000);
                  this.logService.insertLog(this.myUsername, Date(), "admin.added: " + this.usernameToAdd);
                  this.getAdminList();
                }); 
              }
            });
          }
        })
  }

  // Removes admin username from database
  removeAdmin(){
    this.http.post('/removeAdmin', { adminUsername : this.usernameToRemove}).subscribe(result => {
      this.removeServerMessage = result['message'];
      setTimeout(function(){
        this.removeServerMessage = '';
        console.log("message cleared");
      }.bind(this),2000);
      this.logService.insertLog(this.myUsername, Date(), "admin.removed: " + this.usernameToRemove);
      this.getAdminList();
    }); 
  }

  // Returns list of all admin username
  getAdminList(){
    this.http.post('/getAllAdmins',{}).subscribe(result => {
      this.currAdminList = result as AdminType[];
    })
  }

    // Returns list of all creator username
    getCreatorList(){
      this.http.post('/getAllCreators',{}).subscribe(result => {
        this.currCreatorList = result as AdminType[];
      })
    }

  navigateToLogs() {
    this.router.navigate(['/displayLogs']);
  }

  testEmail(){
    if(this.emailRecipient === ""){
      this.emailServerMessage = "Please enter an email";
    }else{
      this.http.post('/sendEmail',{ reciever : this.emailRecipient, url : this.fullUrl}).subscribe(result =>{
        this.emailServerMessage = result['message'];
        setTimeout(function(){
          this.emailServerMessage = '';
          console.log("message cleared");
        }.bind(this),2000);
      });
    }
  }
}
