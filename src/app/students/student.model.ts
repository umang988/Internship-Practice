export class Student {
    public id : number;
    public name : string;
    public age : number;
    public gender : string;
    public address : StudentAddress;

    constructor(
        id : number,
        name : string,
        age : number,
        gender : string,
        address : StudentAddress,
     ){
         this.id = id;
         this.name = name;
         this.age = age;
         this.gender = gender;
         this.address = address;
     }

}

export class StudentAddress{
    public city : string;
    public pincode : number;

    constructor(city : string, pincode : number){
        this.city = city;
        this.pincode = pincode
    }
}