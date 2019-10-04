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

  constructor(private jobRepo: JobService) { }

  async ngOnInit() {
    await this.getJobs();
  }

  async getJobs(): Promise<void> {
    const jobs = await this.jobRepo.getJobs();
    this.jobs = jobs;
  }

}
