import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';
import { LogService } from '../log.service';
import { AppComponent } from '../app.component';
import { UserObject} from '../userobject';
import {TranslateService} from '../translate.service';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginFormComponent implements OnInit {
  serverMessage = "";
  isAuth:boolean;
  newUser:UserObject;
  username: string = "";
  password: string = "";
  password2: string = "";
  usernameFromHeader: string;
  passwordFromHeader: string;

  username_login: string = "";
  password_login: string = "";

  taskTitle: string = "Name of the Problem";
  taskSummary: string = "Summary of the Problem";
  address: string = "Address";
  currentLang: string = "English";
  email: string = "Email";
  date: string ='Date';
  time: string = 'Time';
  city: string = 'City';
  state: string = 'State';
  postAProb: string = 'Post a Problem';
  Usernamestr: string = "Username";
  Passwordstr: string = "Password";
  SignUp: string = "Sign Up";
  SignIn: string = "log in";
  orgID: number;
  basicInfo: string = "Help Out is a community organizing tool that matches people in need with people from their own community willing to help. To contact us about this product, email injazatduke@gmail.com.";
  accessCode: string = "Access Code";
  firstName: string = "Name";
  lastName: string = "Last name";
  incorrectInfo: string = "Incorrect information";
  userType: string = "";
  loginErr: string = "";

  constructor(private route: ActivatedRoute, private router:Router, private log: LogService, private user:UserService, private http:HttpClient, private app:AppComponent, private translateService:TranslateService) {
 }

  ngOnInit() { 
    this.http.post('/getLoginCredentials',{}).toPromise().then((result) => {
      if(result['isAuthenticated'] == true){
        this.router.navigate(['home']);
      }
     });
    }

  createNewUser() {
    var userType;
    if (this.orgID > 99999){
      userType = "admin";
    }
    else if (this.orgID % 2){
      userType = "volunteer";
    }
    else {
     userType = "refugee";
    }
    this.newUser = this.user.createUserObject(this.username, this.password, this.firstName, this.lastName, userType);
    this.http.post('/addUser', {"newUser": this.newUser}).subscribe((result) => {
      this.goNext();
    })
  }

  login() {
    if (!this.username_login || !this.password_login) {
      this.loginErr= this.incorrectInfo;
    } else {
      this.http.post('/authenticate', {"currentUsername":this.username_login, "currentPassword":this.password_login}).subscribe(data => {
        console.log(data);
        if(data) {
          this.user.setUser(data);
          this.goNext();
        } else {
          this.loginErr= this.incorrectInfo;
        }
      })
    }
  }
  
  toBurmese() {
    var ar= this.translateService.toBurmese();
    this.Usernamestr=ar[0];
    this.currentLang=ar[1]; 
    this.Passwordstr=ar[2]; 
    this.SignUp=ar[3]; 
    this.SignIn=ar[4]; 
    this.basicInfo=ar[5]; 
    this.taskTitle=ar[6]; 
    this.taskSummary=ar[7]; 
    this.address=ar[8];
    this.email=ar[9]; 
    this.date=ar[10]; 
    this.time=ar[11]; 
    this.city=ar[12];
    this.state=ar[13];
    this.postAProb=ar[14];
    this.accessCode= ar[15];
    this.firstName = ar[16];
    this.lastName = ar[17];
    this.incorrectInfo = ar[18];
  }
  // authenticateCurrentUser(e){
  //   e.preventDefault();
  //   var username = e.target.elements[0].value;
  //   var password = e.target.elements[1].value;
  //   var result;
  //   var loginObject = {currentUsername : username, currentPassword: password};
  //   var response = this.http.post('/authenticate', loginObject).subscribe(data => {
  //     if(data['isAuthenticated'] == true) {
  //       result = this.log.insertLog(username, Date(), "login.success");
  //       setTimeout(function(){}.bind(this),2000);
  //       this.app.reset(); // Reset timeout
  //       this.route.queryParams.subscribe((params: Params) => {
  //         if (params['return']) {
  //           this.router.navigate([params['return']]);
  //         } else {
  //           this.router.navigate(['home']);
  //         }
  //       });
  //     } else {
  //       this.log.insertLog(username, Date(), "login.failure");
  //       this.user.setUserLoggedInErrorMessage(data['message']);
  //     }
  //   });
  // }

  goNext() {
    if (this.orgID > 99999){
      this.router.navigate(['/admin']);
    }
    else if (this.orgID % 2){
      this.router.navigate(['/main']);
    }
    else {
      this.router.navigate(['/posttask']);
    }
  }

  toEnglish() {
    var ar= this.translateService.toEnglish();
    this.Usernamestr=ar[0];
    this.currentLang=ar[1]; 
    this.Passwordstr=ar[2]; 
    this.SignUp=ar[3]; 
    this.SignIn=ar[4]; 
    this.basicInfo=ar[5]; 
    this.taskTitle=ar[6]; 
    this.taskSummary=ar[7]; 
    this.address=ar[8];
    this.email=ar[9]; 
    this.date=ar[10]; 
    this.time=ar[11]; 
    this.city=ar[12];
    this.state=ar[13];
    this.postAProb=ar[14];
    this.accessCode= ar[15];
    this.firstName = ar[16];
    this.lastName = ar[17];
    this.incorrectInfo = ar[18];
  
  }

  toNapali() {
    var ar= this.translateService.toNapali();
    this.Usernamestr=ar[0];
    this.currentLang=ar[1]; 
    this.Passwordstr=ar[2]; 
    this.SignUp=ar[3]; 
    this.SignIn=ar[4]; 
    this.basicInfo=ar[5]; 
    this.taskTitle=ar[6]; 
    this.taskSummary=ar[7]; 
    this.address=ar[8];
    this.email=ar[9]; 
    this.date=ar[10]; 
    this.time=ar[11]; 
    this.city=ar[12];
    this.state=ar[13];
    this.postAProb=ar[14];
    this.accessCode= ar[15];
    this.firstName = ar[16];
    this.lastName = ar[17];
    this.incorrectInfo = ar[18];
  
  }

  toSpanish() {
    var ar= this.translateService.toSpanish();
    this.Usernamestr=ar[0];
    this.currentLang=ar[1]; 
    this.Passwordstr=ar[2]; 
    this.SignUp=ar[3]; 
    this.SignIn=ar[4]; 
    this.basicInfo=ar[5]; 
    this.taskTitle=ar[6]; 
    this.taskSummary=ar[7]; 
    this.address=ar[8];
    this.email=ar[9]; 
    this.date=ar[10]; 
    this.time=ar[11]; 
    this.city=ar[12];
    this.state=ar[13];
    this.postAProb=ar[14];
    this.accessCode= ar[15];
    this.firstName = ar[16];
    this.lastName = ar[17];
    this.incorrectInfo = ar[18];
  
  }

  toSwahili() {
    var ar= this.translateService.toSwahili();
    this.Usernamestr=ar[0];
    this.currentLang=ar[1]; 
    this.Passwordstr=ar[2]; 
    this.SignUp=ar[3]; 
    this.SignIn=ar[4]; 
    this.basicInfo=ar[5]; 
    this.taskTitle=ar[6]; 
    this.taskSummary=ar[7]; 
    this.address=ar[8];
    this.email=ar[9]; 
    this.date=ar[10]; 
    this.time=ar[11]; 
    this.city=ar[12];
    this.state=ar[13];
    this.postAProb=ar[14];
    this.accessCode= ar[15];
    this.firstName = ar[16];
    this.lastName = ar[17];
    this.incorrectInfo = ar[18];
  
  }

  toArmenian() {
    var ar= this.translateService.toArmenian();
    this.Usernamestr=ar[0];
    this.currentLang=ar[1]; 
    this.Passwordstr=ar[2]; 
    this.SignUp=ar[3]; 
    this.SignIn=ar[4]; 
    this.basicInfo=ar[5]; 
    this.taskTitle=ar[6]; 
    this.taskSummary=ar[7]; 
    this.address=ar[8];
    this.email=ar[9]; 
    this.date=ar[10]; 
    this.time=ar[11]; 
    this.city=ar[12];
    this.state=ar[13];
    this.postAProb=ar[14];
    this.accessCode= ar[15];
    this.firstName = ar[16];
    this.lastName = ar[17];
    this.incorrectInfo = ar[18];
  
  }

  toFrench() {
    var ar= this.translateService.toFrench();
    this.Usernamestr=ar[0];
    this.currentLang=ar[1]; 
    this.Passwordstr=ar[2]; 
    this.SignUp=ar[3]; 
    this.SignIn=ar[4]; 
    this.basicInfo=ar[5]; 
    this.taskTitle=ar[6]; 
    this.taskSummary=ar[7]; 
    this.address=ar[8];
    this.email=ar[9]; 
    this.date=ar[10]; 
    this.time=ar[11]; 
    this.city=ar[12];
    this.state=ar[13];
    this.postAProb=ar[14];
    this.accessCode= ar[15];
    this.firstName = ar[16];
    this.lastName = ar[17];
    this.incorrectInfo = ar[18];
  
  }


  toArabic() {
    var ar= this.translateService.toArabic();
    this.Usernamestr=ar[0];
    this.currentLang=ar[1]; 
    this.Passwordstr=ar[2]; 
    this.SignUp=ar[3]; 
    this.SignIn=ar[4]; 
    this.basicInfo=ar[5]; 
    this.taskTitle=ar[6]; 
    this.taskSummary=ar[7]; 
    this.address=ar[8];
    this.email=ar[9]; 
    this.date=ar[10]; 
    this.time=ar[11]; 
    this.city=ar[12];
    this.state=ar[13];
    this.postAProb=ar[14];
    this.accessCode= ar[15];
    this.firstName = ar[16];
    this.lastName = ar[17];
    this.incorrectInfo = ar[18];
  
  }


  
}