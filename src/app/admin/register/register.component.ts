import { AdminService } from './../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CustomValidators } from 'src/app/utils/validator.utils';
import { AdminRegisterDTO } from 'src/app/DTOs/admin.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/g)],
    cpassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/g)]]
  });

  hide: boolean = true;
  chide: boolean = true;
  isLoading: boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authRepo: AdminService
  ) { 
    this.registrationForm.setValidators(CustomValidators.confirmPasswordValidator())
  }

  ngOnInit() {
    // this.registrationForm.valueChanges.subscribe((e) => console.log(this.registrationForm.controls.cpassword))
    this.registrationForm.setValue({
      username: 'daniel',
      email: 'dayo@almondcareers.com',
      password: 'Something1',
      cpassword: 'Something1'
    })
  }

  async submit() {
    const formData: AdminRegisterDTO = {
      username: this.registrationForm.value.username,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
    }
    try {
      this.isLoading = true
      await this.authRepo.createAdmin(formData)
    } catch (error) {
      this.isLoading = false;
      throw new Error(error.message)
    } finally {
      this.router.navigateByUrl('/admin/dashboard');
    }
  }

}
