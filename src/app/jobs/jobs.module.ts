import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [ListComponent, SingleComponent, CreateComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ]
})
export class JobsModule { }
