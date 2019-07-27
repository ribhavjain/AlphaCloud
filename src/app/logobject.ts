export class LogObject {
    _id: string; // string assigned by MongoDB
    username: string; // string representing a username
    timestamp: string; // string representing the time at which the log occurs
    userEvent: string; // *string representing the action being logged

    constructor(_id:string , username:string, timestamp:string, userEvent:string) {
        this._id = _id;
        this.username = username;
        this.timestamp = timestamp;
        this.userEvent = userEvent;
    }
}

/* A userEvent can be a
 * login.success
 * login.failure
 * admin.added: [username]
 * admin.removed: [username]
 */