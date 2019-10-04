import { Router } from '@angular/router';
import { AdminService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _currenUser: any;

  constructor(private router: Router, private authRepo: AdminService, private userRepo: UserService) { }

  ngOnInit() {
    this.currentUser = this.userRepo.retrieveUser();
  }

  logout() {
    this.authRepo.logout();
    this.currentUser = null
  }

  get currentUser() {
    return this._currenUser;
  }

  set currentUser(value: object) {
    this._currenUser = value;
  }

}
