/* A ApproverObject keeps track a single plan approver, their status, and comments
 */

export class ApproverObject {
    username:string;
    name: string;
    status: string; // "pending," "approved,", or "rejected"
    timestamp: string;
    comments: string;

    constructor(username:string,name:string,status:string,timestamp:string,comments:string) {
        this.username = username;
        this.name = name;
        this.status = status;
        this.timestamp = timestamp;
        this.comments = comments;
    }
}