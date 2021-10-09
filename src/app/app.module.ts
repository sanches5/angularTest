import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';
import { EminemComponent } from './eminem/eminem.component';
import { RomanComponent } from './roman/roman.component';
import { FormTaskDirective } from './form-task.directive';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    EminemComponent,
    RomanComponent,
    FormTaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobxAngularModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
