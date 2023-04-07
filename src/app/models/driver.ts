export class Driver{
    id:number;
    last_Name:string;
    first_Name:string;
    ssn:string;
    doB:Date;
    address:string;
    city:string;
    phone:string;
    zip:string;
    active:boolean;

    constructor(_id:number,lastname:string,firstname:string,ssn:string,dob:Date,address:string,city:string,phone:string,zip:string,active:boolean) {
        this.id = _id;
        this.last_Name =lastname;
        this.first_Name = firstname;
        this.ssn = ssn;
        this.doB = dob,
        this.address = address;
        this.city = city;
        this.phone = phone;
        this.zip = zip;
        this.active = active
    }
}