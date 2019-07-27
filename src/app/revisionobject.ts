import { CommentObject } from './commentobject';
/* A RevisionObject keeps track of a revision of a PlanObject
 */

export class RevisionObject {
    _id: string; // Assigned by MongoDB
    username:string;
    timestamp: string;
    results: any;
    templateVersion: number;
    majorRev: number;
    minorRev: number;
    percentDoneArr: number[];
    approvers:any[];
    approvalStatus:string;
    comments:CommentObject[]=[];

    constructor(_id:string, username:string,timestamp:string,results:any,templateVersion:number,
        majorRev:number,minorRev:number,percentDoneArr:number[], approvers:any[], approvalStatus:string, comments:any[]) {
        this._id = _id;
        this.username = username;
        this.timestamp = timestamp;
        this.results = results;
        this.templateVersion = templateVersion;
        this.majorRev = majorRev;
        this.minorRev = minorRev;
        this.percentDoneArr = percentDoneArr;
        this.approvers = approvers;
        this.approvalStatus = approvalStatus;
        this.comments = comments;
    }
}