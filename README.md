# sellhouse


mkdir sellhouse
cd sellhouse
firebase init, select hosting, singlepage app
firebase serve
>check localhost:5000 notice welcome firebase
ng new sellhouse, select router
cd sellhouse
ng serve
>check localhost:4200, notice welcome ng
>edit firebase.json
>>add 
  "hosting": {
   "public": "sellhouse/dist/sellhouse",
>check localhost:5000, notice welcome ng
git push

>adding router pages
ng g c home 
/src/app/app.component.html
>>troubleshooting 
>display home component, add to bottom <app-home></app-home>
/app/app-routing.module.ts
>top
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent } from './home/home.component'; //new
const routes: Routes = [
  { path: '', component: HomeComponent }, //new
  { path: 'home', component: HomeComponent }, //new
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



ng g c about
ng g c contact
>check :4200
ng build, will compile code 
firebaseploy
>check https://turtlewash-1.firebaseapp.com