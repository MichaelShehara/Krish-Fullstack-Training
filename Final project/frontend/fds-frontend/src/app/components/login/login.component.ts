import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fuelStation1Username: String;
  fuelStation2Username: String;
  cpcUsername: String;
  clientUsername: String;
  password: String;
  constructor(private router: Router,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.fuelStation1.subscribe(f1 => {
      this.fuelStation1Username = f1;
    })
    this.sharedService.fuelStation2.subscribe(f2 => {
      this.fuelStation2Username = f2;
    })
    this.sharedService.cpc.subscribe(c => {
      this.cpcUsername = c;
    })
    this.sharedService.client.subscribe(cl => {
      this.clientUsername = cl;
    })
  }

  login() {
    if (this.fuelStation1Username && this.password == 'jkWattala@321') {
      alert('Welcome' + ' ' + this.fuelStation1Username)
      this.router.navigate(['/create-order'])
    } else if (this.fuelStation2Username && this.password == 'tmPeliyagoda@321') {
      alert('Welcome' + ' ' + this.fuelStation2Username)
      this.router.navigate(['/create-order'])
    } else if (this.cpcUsername  && this.password == 'cpc@321') {
      alert('Welcome' + ' ' + this.cpcUsername)
      this.router.navigate(['/dispatch-order'])
    } else if (this.clientUsername && this.password == 'saman@321') {
      alert('Welcome' + ' ' + this.clientUsername)
      this.router.navigate(['/report'])
    } else {
      alert('Invalid username or password!')
    }
  }

}
