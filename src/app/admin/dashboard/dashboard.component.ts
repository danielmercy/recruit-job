import { Job } from './../../interfaces/job.interface';
import { AdminService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { JobService } from './../../services/job.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authRepo: AdminService, private jobRepo: JobService, private userRepo: UserService) { }

  private _currentUser;
  private _isAuthenticated: boolean;

  public jobs: Array<Job>;
  isLoading: boolean = false;

  async ngOnInit() {
    this.currentUser = this.userRepo.retrieveUser();
    this._isAuthenticated = this.userRepo.isAuthenticated;
    await this.getJobs()
  }

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  public set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  get currentUser() {
    return this._currentUser;
  }

  set currentUser(value: object) {
    this._currentUser = value;
  }

  async getJobs(): Promise<void> {
    try {
      this.isLoading = true;
      this.jobs = await this.jobRepo.getJobs();
    } catch (error) {
      throw new Error(error.message);
    }
    this.isLoading = false;
  }

  logout() {
    this.currentUser = null
    this.authRepo.logout();
  }

}
