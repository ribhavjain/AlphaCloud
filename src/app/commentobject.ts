export class CommentObject {
    questionName:string; // Name of question comment is tied to
    majorRev:number; // Major rev of plan comment tied to
    minorRev:number; // Minor rev of plan comment tied to
    author: string; // Username of commenter
    timestamp: string; // Time comment submitted
    comment: string; // Actual comment

    constructor(questionName:string, majorRev:number, minorRev:number, author:string, timestamp:string, comment:string) {
        this.questionName = questionName;
        this.majorRev = majorRev;
        this.minorRev = minorRev;
        this.author = author;
        this.timestamp = timestamp;
        this.comment = comment;
    }
}