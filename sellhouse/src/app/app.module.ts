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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
