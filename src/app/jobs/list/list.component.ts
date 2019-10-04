import { UserService } from './../../services/user.service';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
// import Job from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  jobs: any = [];
  isLoading: boolean = false;

  constructor(private jobRepo: JobService, private userRepo: UserService) { }

  public get isAuthenticated(): boolean {
    return this.userRepo.isAuthenticated;
  } 

  async ngOnInit() {
    await this.getJobs();
  }

  async getJobs(): Promise<void> {
    try {
      this.isLoading = true;
      const jobs = await this.jobRepo.getJobs();
      this.jobs = jobs;
    } catch (error) {
      throw new Error(error.message);
    }
    this.isLoading = false;
  }

}
