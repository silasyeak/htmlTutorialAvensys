import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pay2RoutingModule } from './pay2-routing.module';
import { Pay2Component } from './pay2.component';


@NgModule({
  declarations: [
    Pay2Component
  ],
  imports: [
    CommonModule,
    Pay2RoutingModule
  ]
})
export class Pay2Module { }
