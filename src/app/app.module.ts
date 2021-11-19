import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ListCheckComponent } from './listCheck/listCheck.component';
import { FormTaskDirective } from './form-task.directive';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    TasksComponent,
    ListCheckComponent,
    FormTaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobxAngularModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
