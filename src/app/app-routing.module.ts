import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {EminemComponent} from './eminem/eminem.component';
import {RomanComponent} from './roman/roman.component';

const routes: Routes = [
  { path: 'bob', component: BodyComponent },
  { path: 'eminem', component: EminemComponent},
  { path: 'roman', component: RomanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
