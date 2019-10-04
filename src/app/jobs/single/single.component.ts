import { JobService } from './../../services/job.service';
import { ActivatedRoute } from '@angular/router';
import {Job} from 'src/app/interfaces/job.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  job: Job;

  constructor(private route: ActivatedRoute, private jobRepo: JobService) { }

  async ngOnInit() {
    await this.getJob();
  }

  async getJob(): Promise<any> {
    const id: string = this.route.snapshot.params['id'];
    const job = await this.jobRepo.getJob(id);
    this.job = job;
    console.log(this.job);
  }

}
