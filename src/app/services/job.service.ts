import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response2, Response, Job } from './../interfaces/job.interface';



@Injectable({
  providedIn: 'root'
})
export class JobService {

  api: String = 'https://recruitjob.co.uk/api/';
  endpoint: String = 'jobs'

  constructor(private http: HttpClient) { }

  async getJobs(): Promise<Job[]> {
    const jobs = await this.http.get<Response>(`${this.api}${this.endpoint}`).toPromise().then((res) => res.data.message);
    return jobs;
  }

  async getJob(id: string): Promise<Job> {
    const job = await this.http.get<Job>(`${this.api}${this.endpoint}/${id}`).toPromise()
    return job;
  }
}
