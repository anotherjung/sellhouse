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


>>adding bootstrap
npm install ngx-bootstrap bootstrap --save
>>update angular.json, search for style and add two sections
            "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
              "src/styles.css"
            ],

2
Open src/app/app.module.ts and add:
import { AlertModule } from 'ngx-bootstrap';
...

@NgModule({
   ...
   imports: [AlertModule.forRoot(), ... ],
   ...
})

3
Open angular.json and insert a new entry into the styles array:
      "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css",
      ],


4
Open src/app/app.component.html and add:
  <alert type="success">hello</alert>

ng build
firebase deploy 
git push

>creating reusable content using partials 
ng g c form, ng g c ENTERNAME
>form
>process123
>product1vs2
>customertype123

>processNextSteps10
>productAvsB
>customerType123
>customervideo1

>add bootstrap modal
/app.module.ts
import { ModalModule } from 'ngx-bootstrap/modal';
    ModalModule.forRoot(),
>see html in productvideo1learnmore

>test :4200, then deploy 
ng build
firebase serve
>test :5000


# Adding Reactive Forms

>form1
```javascript
import { ReactiveFormsModule } from '@angular/forms'; //form1

@NgModule({
  imports: [
    // other imports ...
    ReactiveFormsModule, //form1
  ],
})
export class AppModule { }
```