import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {TasksComponent} from './tasks/tasks.component';
import {ListCheckComponent} from './listCheck/listCheck.component';

const routes: Routes = [
  { path: 'form', component: BodyComponent },
  { path: 'tasks', component: TasksComponent},
  { path: 'listCheck', component: ListCheckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
