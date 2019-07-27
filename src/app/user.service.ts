import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserObject } from './userobject';
import "rxjs/add/observable/of";  // For RxJs  5.0+


@Injectable()
export class UserService {

  private errorMessage;
  private myUser:UserObject;
  //private currentUser : this.user.asObservable();

  constructor(private http:HttpClient, private router:Router) { 
    this.errorMessage = ' ';
  }

  // Functions for setting error message
  setUserLoggedInErrorMessage(message) {
  	this.errorMessage = message;
  }

  getUserLoggedInErrorMessage() {
  	return this.errorMessage;
  }

  initAll(){
    this.errorMessage = ' ';
  }

  setUser(data) {
    this.myUser.username = data.username;
    this.myUser.userType = data.userType;
    this.myUser.givenName = data.givenName;
    this.myUser.displayName = data.displayName;
  }
  // For logging out
  logOutCurrentUser(){
    this.getUser().subscribe((res) => {
      if(res['isAuthenticated'] == true) {
     //   this.myUser = this.createUserObject(res['username'], res['email'], res['givenName'], res['displayName']);
        this.http.post('/logoutPlans', {username:this.myUser.username}).subscribe(res => {
          this.http.post('/logout',{}).subscribe(data => {
            this.router.navigate(['/']);
          });
        })
      }
    });
    // Remove the faded grey screen on login page
    let backdrop = document.querySelector("body > div.modal-backdrop.fade.in");
    if (backdrop) {
      backdrop.remove();
    }
  }
  // Creates UserObject with results from LDAP request
  createUserObject(username:string, password:string, givenName:string, displayName:string, userType:string) {
    return new UserObject(username, password, givenName, displayName, userType);
  }

  // Returns UserObject
  getUser() {
    return this.http.post('/getUserInfo',{});
  }

  // Returns current role of user
  getRole() {
    return this.http.post('/getLoginCredentials', {}).toPromise();
  }


}
