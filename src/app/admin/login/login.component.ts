import { Router } from '@angular/router';
import { AdminService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminLoginDTO } from 'src/app/DTOs/admin.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  isLoading: boolean = false;

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
    // password: ['', Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/g)]
  })

  constructor(private fb: FormBuilder, private authRepo: AdminService, private router: Router) { 
    // this.loginForm.valueChanges.subscribe((e) => console.log(this.loginForm.controls.email))
    this.loginForm.setValue({
      email: 'Onakoyak@gmail.com',
      password: 'password'
    });
   }

  ngOnInit() {
  }

  async submit() {
    const formData: AdminLoginDTO = this.loginForm.value;
    let result;
    try {
      this.isLoading = true
      result = await this.authRepo.login(formData);
    } catch (error) {
      throw new Error(error.message)
    } finally {
      console.log(result)
      this.router.navigateByUrl('/admin/dashboard');
    }
  }

}
