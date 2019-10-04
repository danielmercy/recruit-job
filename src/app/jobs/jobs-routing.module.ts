import { AuthGuard } from './../auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },{
    path: ':id/:slug',
    component: SingleComponent
  },{
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
