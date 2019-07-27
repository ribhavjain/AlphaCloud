export class UserObject {
    username: string; // string representing a user's username from LDAP server
    password: string; // string representing a user's email
    givenName: string; // string representing a user's first name
    displayName: string; // string representing a user's name in "Last, First" format
    userType: string; // string for the user's type

    constructor(username:string, password:string, givenName:string, displayName:string, userType:string) {
        this.username = username;
        this.password = password;
        this.givenName = givenName;
        this.displayName = displayName;
        this.userType = userType;
    }
}