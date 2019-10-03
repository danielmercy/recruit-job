import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Job from '../interfaces/job.interface';

interface Response {
  data: {
    message: Job[]
  }
}

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
}
