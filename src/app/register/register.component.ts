import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from '../model/login';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
    this.authService.register(this.model).subscribe(
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
