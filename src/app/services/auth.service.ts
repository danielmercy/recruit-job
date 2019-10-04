import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminRegisterDTO, AdminLoginDTO } from '../DTOs/admin.dto';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private api: String = 'https://recruitjob.co.uk/api/';
  private registerEndpoint: String = 'admin/register';
  private loginEndpoint: string = 'admin/token'

  private client_id: number = 2;
  private client_secret: string = "KYrtfcgEzmCn5WbUbnP8czKpdmni91smtpMpyCk0";
  private scope: string = "*";
  private provider: string = "adminapi";

  constructor(private http: HttpClient) { }

  async createAdmin(form: AdminRegisterDTO): Promise<void> {
    const process = await this.http.post<any>(`${this.api}${this.registerEndpoint}`, {...form}).toPromise();
    console.log(process);
    // return process;
  }

  async login(form: AdminLoginDTO): Promise<void> {
    const body = {...form, 
        grant_type: 'password', 
        client_id: this.client_id, 
        client_secret: this.client_secret, 
        scope: this.scope,
        provider: this.provider
    }
    const process = await this.http.post<any>(`${this.api}${this.loginEndpoint}`, {...body}).toPromise();
    console.log(process)
  }
}