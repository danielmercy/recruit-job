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

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/g)]
  })

  constructor(private fb: FormBuilder, private authRepo: AdminService) { 
    // this.loginForm.valueChanges.subscribe((e) => console.log(this.loginForm.controls.email))
    this.loginForm.setValue({
      email: 'dayo@almondcareers.com',
      password: 'Something1'
    });
   }

  ngOnInit() {
  }

  async submit() {
    const formData: AdminLoginDTO = this.loginForm.value;
    const result = await this.authRepo.login(formData);
  }

}
