export class User{
    public id;
    public email;
    public password;
    public fullName;
    public mobile;
    constructor(id:number,email:string,password:string,fullName:string,mobile:number){
        this.id = id;
        this.password =password;
        this.fullName  = fullName;
        this.email = email;
        this.mobile = mobile;
    }
}