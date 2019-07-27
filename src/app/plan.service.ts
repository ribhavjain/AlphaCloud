import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PlanObject } from './planobject';
import { PlanTypeService } from './plan-type.service';
import {HttpClient} from '@angular/common/http';
import { RevisionObject } from './revisionobject';

/* PlanService contains all the functions that deal with PlanObjects
 */

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor( private router:Router, private planTypeService: PlanTypeService, private http: HttpClient) { }

    // Data
    plan:PlanObject;
    view:boolean;
    pendingChanges = false;
    templateVersionForUpdatePlan: any = undefined; //gives the version of the Survey Templates that is displayed when user clicks on update
    updateClicked: boolean = false; //helps indicate if the use clicked on "click to update" (useful when dealing wih displaying flags)

    // Runs when user wants to view edit survey
    planEdit(plan:PlanObject){
      this.plan = plan;
      this.http.post('/getPlanType', {_id: plan.planType_id}).subscribe(res => {
        this.planTypeService.myPlanType = (res['planType']);
        this.router.navigate(['edit/' + plan.plan_id + '/page/1']);
      }); 
    }

    // Runs when user wants to view survey
    planView(plan:PlanObject){
      this.plan = plan;
      this.http.post('/getPlanType', {_id: plan.planType_id}).subscribe(res => {
        this.planTypeService.myPlanType = (res['planType']);
        this.router.navigate(['view/' + plan.plan_id]);
      }); 
    }

    // Gets stored plan from its ID
    getPlan(id:string) {
      return this.http.post('/getPlanObject', { "myID" : id });
    }

    // Gets stored plan from its ID
    getRev(id:string) {
      return this.http.post('/getRevObject', { "myID" : id });
    }

    planRevisionEdit(rev:RevisionObject){
      this.router.navigate(['plan/' + this.plan._id + '/revision/' + rev._id]);
    }

    planRevisionView(rev:RevisionObject){
      this.router.navigate(['plan/' + this.plan._id + '/revision/' + rev._id]);
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

    // Updates latest overall plan progress
    getPlanProgress(myRev){
      var doneLen = myRev.percentDoneArr.length;
      var doneSum = 0;
      for (var i = 0; i < doneLen; i++) {
        doneSum += (myRev.percentDoneArr)[i];
      }
      // Get average progress for each plan
      this.plan.progress = Math.round(doneSum / doneLen); // Stores locally, no server call b/c it's calculated each time
    }
}
