export class User{
    public id;
    public email;
    public password;
    public fullname;
    public mobile;
    constructor(id:number,email:string,password:string,fullname:string,mobile:number){
        this.id = id;
        this.password =password;
        this.fullname  = fullname;
        this.email = email;
        this.mobile = mobile;
    }
}