import { JobService } from './../../services/job.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  isLoading: boolean = false;

  addJobForm = this.fb.group({
    title: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    category_id: [`${Math.floor(Math.random() * 5) + 1}`],
    requirements: ['', Validators.required],
    description: ['', Validators.required],
    website: ['', Validators.required],
    position: ['', Validators.required],
    type: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private router: Router, private jobRepo: JobService) { }

  ngOnInit() {
    this.addJobForm.setValue({
      title: 'Front End Engineer',
      position: 'Front End Developer',
      city: 'Ikeja',
      state: 'Lagos',
      country: 'Nigeria',
      category_id: `${Math.floor(Math.random() * 5) + 1}`,
      requirements: 'Some text',
      description: 'Some text',
      address: '12 John str',
      website: 'www.com',
      type: 'full-time',
    })
  }

  async submit() {
    const formData = {...this.addJobForm.value};
    try {
      this.isLoading = true
      await this.jobRepo.createJob(formData);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      this.isLoading = false;
      // this.router.navigateByUrl('')
    }
  }

}
