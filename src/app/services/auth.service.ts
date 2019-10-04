import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminRegisterDTO, AdminLoginDTO } from '../DTOs/admin.dto';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private api: String = 'https://recruitjob.co.uk/api/';
  private registerEndpoint: String = 'admin/register';
  private loginEndpoint: string = 'admin/signin';
  private logoutEndpoint: string = 'admin/logout';

  
//   const body = {...form, 
//     grant_type: 'password', 
//     client_id: this.client_id, 
//     client_secret: this.client_secret, 
//     scope: this.scope,
//     provider: this.provider
// }

  constructor(private http: HttpClient, private userRepo: UserService) { }

  async createAdmin(form: AdminRegisterDTO): Promise<void> {
    const result = await this.http.post<any>(`${this.api}${this.registerEndpoint}`, {...form}).toPromise();
    console.log(result);
    // return process;
  }

  async login(form: AdminLoginDTO): Promise<void> {
    const result = await this.http.post<any>(`${this.api}${this.loginEndpoint}`, {...form}).toPromise();
    if(result) localStorage.setItem('currentUser', JSON.stringify(result));
    console.log(result)
  }

  async logout(): Promise<void> {
    // const result = await this.http.get<any>(`${this.api}${this.logoutEndpoint}`).toPromise();
    this.userRepo.removeUserData();
    // console.log(result)
  }
}