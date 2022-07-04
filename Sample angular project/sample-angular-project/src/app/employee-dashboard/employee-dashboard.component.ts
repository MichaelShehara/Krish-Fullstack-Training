import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from '../models/employee';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue: FormGroup;
  employee: EmployeeModel = new EmployeeModel();
  empData: any;
  displayAddBtn: boolean;
  displayUpdateBtn: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private empService: ApiService
  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    })
    this.getAll();
  }

  clickAddEmpBtn(){
    this.formValue.reset();
    this.displayAddBtn = true;
    this.displayUpdateBtn = false;
  }

  createEmp() {
    this.employee.firstName = this.formValue.value.firstName;
    this.employee.lastName = this.formValue.value.lastName;
    this.employee.email = this.formValue.value.email;
    this.employee.mobile = this.formValue.value.mobile;
    this.employee.salary  = 'Rs.' + this.formValue.value.salary;

    this.empService.postEmpolyee(this.employee).subscribe(res => {
      console.log(res);
      alert("Employee added successfully!")
      let ref = document.getElementById('cancel')
      ref.click();
      this.formValue.reset();
      this.getAll();
    },
      err => {
        alert("Oops! Something went wrong")
      })
  }

  getAll() {
    this.empService.getEmployee().subscribe(res => {
      this.empData = res;
    })
  }

  deleteEmp(empRow: any) {
    this.empService.deleteEmployee(empRow.id).subscribe(res => {
      alert("Employee deleted successfully!")
      this.getAll();
    })
  }

  onEditEmp(row : any){
    this.displayAddBtn = false;
    this.displayUpdateBtn = true;
    this.employee.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }


  updateEmp(){
    this.employee.firstName = this.formValue.value.firstName;
    this.employee.lastName = this.formValue.value.lastName;
    this.employee.email = this.formValue.value.email;
    this.employee.mobile = this.formValue.value.mobile;
    this.employee.salary = this.formValue.value.salary;

    this.empService.updateEmployee(this.employee,this.employee.id).subscribe(res => {
      alert("Employee updated successfully!")
      let ref = document.getElementById('cancel')
      ref.click();
      this.formValue.reset();
      this.getAll();
    })
  }
}

