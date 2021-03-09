export class Employee{
    public id : number;
    public jobTitleName : string;
    public firstName : string;
    public lastName : string;
    public phoneNumber : number;
    public emailAddress : string;
    public salary : number;
    public details : Details;

    constructor(){
      this.id = null;
     this.jobTitleName = null;
     this.firstName = null;
     this.lastName = null;
     this.phoneNumber = null;
     this.emailAddress = null;
     this.salary = null;
     this.details = new Details();
    }
}

export class Details {
    public city: string;
    public pincode : number;

    constructor(){
        this.city = null;
        this.pincode = null;
    }
}