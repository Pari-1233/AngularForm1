export class Employee {
  /*Initialising properties*/
  Id:number;
  FirstName:string;
  LastName:string;
  Password:string;
  Email:string;
  Gender:string;
  UserName:string;
  Address:string;
  Phone:any;
  language: any;
  qualification:any;
  exp:any
  constructor() {
      this.Id=0;
      this.FirstName='';
      this.LastName='';
      this.UserName='';
      this.Address='';
      this.Password='';
      this.Email='';
      this.Gender='';
      this.Phone=[];
      this.language = '';
      this.qualification='';
      this.exp=Number
  }
}
