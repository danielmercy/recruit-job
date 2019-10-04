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

  private _currentUser: any;
  private _isAuthenticated: boolean;

  constructor(private router: Router, private authRepo: AdminService, private userRepo: UserService) { }

  ngOnInit() {
    this.currentUser = this.userRepo.retrieveUser();
    this.isAuthenticated = this.userRepo.isAuthenticated;
  }

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  public set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  logout() {
    this.currentUser = null
    this.authRepo.logout();
  }

  public get currentUser() {
    return this._currentUser;
  }

  public set currentUser(value: object) {
    this._currentUser = value;
  }

}
