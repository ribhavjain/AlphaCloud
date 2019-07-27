export class PlanTypeObject {
    _id: string; // Assigned by MongoDB
    planTypeName: string; // String representing the name of the Survey Template
    planTemplate: any[]; // JSON Object representing the JSON survey questions for the Survey Template
    lastUpdated: string;
    lastUpdatedBy: string;
    status: boolean; // Whether Survey Template is active or inactive
    isSubSurvey: boolean; //indicates whether the survey template is a sub-survey or not

    constructor(_id:string ,planTypeName:string, planTemplate:any[], lastUpdated:string, lastUpdatedBy:string, status:boolean, isSubSurvey:boolean) {
        this._id = _id;
        this.planTypeName = planTypeName;
        this.planTemplate = planTemplate;
        this.lastUpdated = lastUpdated;
        this.lastUpdatedBy = lastUpdatedBy;
        this.status = status;
        this.isSubSurvey = isSubSurvey;
    }
}