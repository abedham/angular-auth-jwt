import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkEmailPassword: boolean = false;
  model: Login = new Login();
  msg: string;
  @ViewChild('f') myForm: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // this.myForm.reset();
    } else {
      console.log('invalid form')
    }
    
    this.authService.login(this.model).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/home']);
        } else {
          this.msg = 'check your email and password';
        }
      },
      err => {
        console.error(err);
      }
    )
  }
}