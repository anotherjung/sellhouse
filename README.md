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



# adding firestore 
npm install angularfire2 firebase --save
npm audit fix --force

>update src/environments, two files
,,,
  //firebase1
  ,firebase: {
    grab api keys from firebase console
  }
  //ends
,,,

>update app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AlertModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FormComponent } from './form/form.component';
import { Process123Component } from './process123/process123.component';
import { Product1vs2Component } from './product1vs2/product1vs2.component';
import { Customertype123Component } from './customertype123/customertype123.component';
import { Customervideo1Component } from './customervideo1/customervideo1.component';
import { Productvideo1learnmoreComponent } from './productvideo1learnmore/productvideo1learnmore.component';

import { DevComponent } from './dev/dev.component';


import { AngularFireModule } from 'angularfire2'; //form33firestore
import { environment } from '../environments/environment'; //form33firestore
import { AngularFirestoreModule } from 'angularfire2/firestore'; //form33firestore

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FormComponent,
    Process123Component,
    Product1vs2Component,
    Customertype123Component,
    Customervideo1Component,
    Productvideo1learnmoreComponent,
    DevComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
    ,AngularFireModule.initializeApp(environment.firebase) //form33firestore
    ,AngularFirestoreModule // imports firebase/firestore, only needed for database features //form33firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

>update name.component.ts
```
import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  title = 'dev';

  items: Observable<any[]>;

  constructor(db: AngularFirestore) { 
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
    console.log(11,this.title);
  }

}

```


>add collection names items 
>test by adding html
```
  <!-- form11 test -->
<ul>
    <li class="text" *ngFor="let item of items | async">
      {{item.name}}, {{item.email}}, {{item.message}}
    </li>
  </ul>
  <!-- ends -->
```



