import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserObject } from '../userobject';
import { PlanObject } from '../planobject';
import { UserService } from '../user.service';
import { PlanService } from '../plan.service';
import { RevisionObject } from '../revisionobject';
import { HostListener } from '@angular/core';

/* HomeComponent is the landing page for SurveyCentral. It shows all
 * the plans a user has created or has readAccess to. Users can then
 * view or edit plans depending on their permissions. These plans are 
 * identified by their Survey Name, Survey Template, date last updated, and
 * username of the person who last updated it.
 */
/*
&nbsp;
&nbsp;
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //This is to bind HostListener ontop of ngDestroy to the close button
  @ViewChild('relationDismiss') relationDismiss;

  // Data
  userPlans:PlanObject[]; // All plans user has read access to
  latestRevs = {};
  myUser:UserObject;
  isAdmin:boolean;
  filterPlanID: string = "";
  filterProgramName: string = "";
  filterPlanType: string = "";
  filterLastUpdated: string = ""; 
  filterLastUpdatedBy: string = ""; 
  parents=[];
  peers=[];
  children=[];
  ready:boolean=false;
  programArray = [];
  otherSurveys = [];
  programToggle: boolean[] = [];
  subsurveys:PlanObject[];

  constructor(private router:Router,private http:HttpClient, private userService:UserService, private planService:PlanService) { }

  ngOnInit() {
    debugger;
    this.userService.getUser().subscribe((res) => {
      if(res['isAuthenticated'] == true) {
     //   this.myUser = this.userService.createUserObject(res['username'], res['email'], res['givenName'], res['displayName']);
      }
      this.userService.getRole().then(res => {
        this.isAdmin = res['loggedInUserRole'] == "Admin";
        if(this.isAdmin) { // Show all plans if user is an admin
          this.http.post('/getAllPlans', {}).toPromise().then((res => {
            this.userPlans = res['allPlans'] as PlanObject[];
            this.getProgress(); 
            this.injectSubsurveys(this.userPlans);

          }));
        } 
        else { // Just show plans user has read access to 
          this.http.post('/getUserPlans', {"username":this.myUser.displayName + " (" + this.myUser.username + ")"}).toPromise().then((res => {
            this.userPlans = res['userPlans'] as PlanObject[];
            this.getProgress();
            this.injectSubsurveys(this.userPlans);
          }));
        }
        this.appendOtherSurveys();
      })
    });
  }

  @HostListener('window:beforeunload') //catches browser, window, tab, and page exits
  ngOnDestroy() { // Cleans up when you navigate away
    this.relationDismiss.nativeElement.click();
  }

  showRelationships(plan) {
    this.parents = plan.parents;
    this.peers = plan.peers;
    this.children = plan.children;
  }
  ngDoCheck(){
    this.ready = true;
  }
  // Updates planProgress array with the right percentages
  getProgress(){
      var latestRevArr = [];
      for (let plan of this.userPlans) { // Get latest revisions of all user plans
        this.http.post('/getRevision', {_id: plan.latestRev}).subscribe(res => {
          var myRev = res['revision'] as RevisionObject;
          this.latestRevs[plan.latestRev] = myRev;
          var doneLen = myRev.percentDoneArr.length;
          var doneSum = 0;
          for (var i = 0; i < doneLen; i++) {
            doneSum += (myRev.percentDoneArr)[i];
          }
          // Get average progress for each plan
          plan.progress = Math.round(doneSum / doneLen); // Stores locally, no server call b/c it's calculated each time
        })
        latestRevArr.push(plan.latestRev);
      }
  }

  // Returns class of badge depending on progress level
  badgeIndicator(progress) {
    if (progress <= 50) {
      return "badge badge-danger";
    } else if (progress <= 75) {
      return "badge badge-warning";
    } else {
      return "badge badge-success";
    }
  }

  //This function makes all the async calls to inject subsurveys into their corresponding surveys
  injectSubsurveys(surveys) {
    var promiseArray = [];
    for (var i = 0; i < surveys.length; i++) {
      if (!surveys[i].parents.length) {
        promiseArray.push(this.addChildren(surveys[i]));
      }
    }
    Promise.all(promiseArray).then(surveyArray => {
      this.sortByProgram(surveyArray);
    })
  }
  //This function grabs all the surveys (formerly called plans) and then sorts them based on the Program Central Program
  sortByProgram(surveys) {
    this.programArray = [];
    for (var i = 0; i < surveys.length; i++) {
      //we only want the top level surveys so check if it doesnt have parents
      if (!surveys[i].parents.length) {
        //check if it has a program name
        if (surveys[i].pcProgramName) {

          //currProgram is the PC program name for the survey we are currently on
          var currProgram = surveys[i].pcProgramName;
          var matchFound = false;
          //check if the program exists in the array
          for (var j = 0; j < this.programArray.length; j++) {
            if (this.programArray[j][0].pcProgramName == currProgram) {
              //promiseArray.push(this.addChildren(surveys[i]));
              this.programArray[j].push(surveys[i]);
              matchFound = true;
            }
          }
          if (!matchFound){
            this.programArray.push([]);
            //promiseArray.push(this.addChildren(surveys[i]));
            this.programArray[this.programArray.length - 1].push(surveys[i]);
            //add another boolean to the toggle array
            this.programToggle.push(false);
          }

          /* if it doesnt have a program name put it in the other surveys array
          * the reason why it is a seperate array is because we want otherSurveys to always be displayed at the bottom.
          */
        } else {
          surveys[i].pcProgramName = "Other Surveys";
          //this.otherSurveys.push(this.addChildren(surveys[i]));
          //not sure yet what I'm doin for the otherSurvey toggles
        }
      }
    }
  }
  
//This is to toggle expansion for programs
  toggleProgramExpand(index: number) {
    this.programToggle[index] = !this.programToggle[index];
  }

  // //This is to toggle expansion for top level surveys 
  // toggleSurveyExpand(pIndex: number, sIndex: number) {
  //   //sIndex is +1 because [pIndex][0] is the boolean toggle for the program
  //   this.toggleArr[pIndex][sIndex + 1] = !this.toggleArr[pIndex][sIndex + 1];
  //   var currentSurvey = this.programArray[pIndex][sIndex];
  //   //might not need this:
  //   this.http.post('/getSubsurveys', {children: currentSurvey.children}).subscribe(res => {
      
  //     currentSurvey.subSurveyArray = [];
  //     currentSurvey.subSurveyArray = res['subsurveys'];
      
  //   })
  // }

  toggleExpand(survey) {
    survey.isToggled = !survey.isToggled;
  }

  //recursive function for adding subsurvey objects
  addChildren(survey) {
    var promiseArray=[];
    return new Promise((resolve,reject) => {
      if (survey == null) {
        reject(survey);
      }
      survey.isToggled = false;
      if (survey.children) {
      if (survey.children.length) {
        this.http.post('/getChildren', {"children": survey.children}).subscribe(res => {
          if(res['subSurveys'].length) {
            survey.subsurveyArray = res['subSurveys'];
            survey.subsurveyArray = survey.subsurveyArray[0];
            survey.childrenToggle = [];
            //recursively add the children for the subsurveys
            /*for (var i = 0; i < survey.subsurveyArray.length; i++) {
              survey.subsurveyArray[i] = this.addChildren(survey.subsurveyArray[i]);
            }*/
            for (var i = 0; i < survey.subsurveyArray.length; i++) {
              promiseArray.push(this.addChildren(survey.subsurveyArray[i]));
            }
            Promise.all(promiseArray).then(subsurveyArray => {
              for (var i = 0; i < survey.subsurveyArray.length; i++) {
                survey.subsurveyArray[i] = subsurveyArray[i];
              }
              resolve(survey);
            })
          }
           //resolve(survey);
        })
      } else {
        resolve(survey);
      }
    } else {
        resolve(survey);
      }
    });
  }



  appendOtherSurveys() {
    this.programArray.push(this.otherSurveys);
  }        

  // Logic to determine which class to use
  approvalIndicator(status) {
    if (status == "draft") {
      return "badge badge-draft";
    } else if (status == "pending") {
      return "badge badge-pending";
    } else if (status == "approved") {
      return "badge badge-approved";
    } else { // rejected
      return "badge badge-rejected";
    }
  }
}
