import { UserService } from './user.service';
import { CreateJobDTO } from './../DTOs/job.dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, Job } from './../interfaces/job.interface';



@Injectable({
  providedIn: 'root'
})
export class JobService {

  api: String = 'https://recruitjob.co.uk/api/';
  endpoint: String = 'jobs'

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userRepo.retrieveToken()}`
    })
  }


  constructor(private http: HttpClient, private userRepo: UserService) { 
  }

  async getJobs(): Promise<Job[]> {
    const jobs = await this.http.get<Response>(`${this.api}${this.endpoint}`).toPromise().then((res) => res.data.message);
    return jobs;
  }

  async getJob(id: string): Promise<Job> {
    const job = await this.http.get<Job>(`${this.api}${this.endpoint}/${id}`).toPromise()
    return job;
  }

  async createJob(form: CreateJobDTO): Promise<any> {
    // let headers = new Headers();
    // headers.append('Accept', 'application/json');
    // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `Bearer ${this.userRepo.retrieveToken()}`);
    console.log(this.httpOptions)
    const result = await this.http.post<any>(`${this.api}${this.endpoint}`, {...form}, this.httpOptions).toPromise();
    console.log(result);
    return result
  }
}
