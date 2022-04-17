import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee.model' ;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  showEmployee : Employee = {
    language: [],
    qualification: [],
    exp: null,
    Id: 0,
    FirstName: '',
    LastName: '',
    Password: '',
    Email: '',
    Gender: '',
    Phone: '',
    UserName: '',
    Address: ''
  }
  /*copying from data */
  ShowEmployee : Employee = {...this.showEmployee}
  constructor() { }
  ngOnInit(): void {
  }
/*on submit function for submit button*/
onSubmit(form: NgForm) {
  console.log('Employee Data:', form.value);
  form.reset();
}
}
