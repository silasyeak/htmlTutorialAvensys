import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pay2Component } from './pay2.component';

const routes: Routes = [{ path: '', component: Pay2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pay2RoutingModule { }
