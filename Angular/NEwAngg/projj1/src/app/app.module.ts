import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cop1Component } from 'src/cop1/cop1.component';
import { Cop2Component } from 'src/cop2/cop2.component';
import { Cop3Component } from 'src/cop3/cop3.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ProductComponent } from './product/product.component';
import { Pg404Component } from './pg404/pg404.component';
import { Form1Component } from './form1/form1.component';
// import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Form2Component } from './form2/form2.component';
@NgModule({
  declarations: [
    AppComponent,
    Cop1Component,
    Cop2Component,
    Cop3Component,
    ProductComponent,
    Pg404Component,
    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
