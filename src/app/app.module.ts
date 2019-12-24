import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { AddappComponent } from './home/addapp/addapp.component';




const roots:Routes=[
  {path:"registration" ,component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,
  children:[{
    path:"add",component:AddappComponent
  }]
 }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AddappComponent
   
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(roots),FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
