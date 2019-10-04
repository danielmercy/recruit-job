import { JobService } from './job.service';
import { Injectable } from '@angular/core';

interface LocalUser {
    activated: string;
    avatar: string
    created: string
    email: string
    id: number
    remember_token: string
    role: object
    slug: string
    username: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private key: string = 'currentUser';
  
    constructor() { }

    public  get isAuthenticated(): boolean {
        return this.retrieveToken() != null || this.retrieveToken().length > 10 ? true : false;
    } 

    store(content:Object) {
        localStorage.setItem(this.key, JSON.stringify(content));
    }

    retrieveUser(): LocalUser {
        if(this.checkValidity) {
            let result: any = JSON.parse(localStorage.getItem(this.key));
            let user: LocalUser = result ? {...result.data} : {}
            return user;
        } else {
            throw new Error('No User Found');
        }
    }

    retrieveToken(): string {
        if(this.checkValidity) {
            const result: any = JSON.parse(localStorage.getItem(this.key));
            const token: string = result ? result.access_token : '';
            return token;
        } else {
            throw new Error('No User Found');
        }
    }

    removeUserData() {
        const result: any = JSON.parse(localStorage.getItem(this.key));
        if(result) localStorage.removeItem(this.key);
    }

    private checkValidity() {
        let currentTime, expire_date;
        const result: any = JSON.parse(localStorage.getItem(this.key));
        if(result) {
            currentTime = (new Date).valueOf();
            expire_date = new Date(result.expires_at).valueOf();
        }
        if(currentTime <= expire_date) return true;
        return false;
    }

}
