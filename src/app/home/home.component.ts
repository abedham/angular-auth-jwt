import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Array<User>;
  constructor(private authService: AuthService, private usersService: UsersService,private router:Router) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      console.log(users)
      this.users = users;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
    return
  }
}
