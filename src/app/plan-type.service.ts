import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanTypeObject } from './plantypeobject';
import { Router } from '@angular/router';

/**
 * PlanTypeService contains all the functions that deal with PlanTypeObjects
 */
@Injectable({
  providedIn: 'root'
})
export class PlanTypeService {

  // Data
  myPlanType:PlanTypeObject = new PlanTypeObject("","",[],"","",false,false);
  pendingChanges = false;

  constructor(private http: HttpClient, private router: Router) { }

  // Returns a promise with all PlanTypeObject(s) from database
  getAllPlanTypes() {
    return this.http.post('/getAllPlanTypes', {}).toPromise();
  }

  viewBuilder(planType:PlanTypeObject) {
    this.myPlanType = planType;
    this.router.navigate(['build/' + planType._id]);
  }

  // Updates planTypeTemplate in DB
  updatePlanTemplate(newJSON:any) {
    (this.myPlanType.planTemplate).push(newJSON);
    this.http.post('/updatePlanTemplate', {'json' : this.myPlanType.planTemplate, 'myPlanType' : this.myPlanType}).subscribe(res => {
    })
  }

  getPlanType(id:string) {
    return this.http.post('/getPlanType', {myID: id});
  }

  /**
   * @return the latest survey template
   */
  getLatestTemplate(): any[] {
    return this.myPlanType.planTemplate[this.myPlanType.planTemplate.length - 1];
  }
}
