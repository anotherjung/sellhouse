import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent } from './home/home.component'; //new
import {AboutComponent } from './about/about.component'; //new
import {ContactComponent } from './contact/contact.component'; //new

const routes: Routes = [
  { path: '', component: HomeComponent }, //new
  { path: 'home', component: HomeComponent }, //new
  { path: 'about', component: AboutComponent }, //new
  { path: 'contact', component: ContactComponent }, //new
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
