import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent } from './home/home.component'; 
import {AboutComponent } from './about/about.component'; 
import {ContactComponent } from './contact/contact.component'; 

import {DevComponent } from './dev/dev.component'; 


const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'dev', component: DevComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
