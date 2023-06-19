import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { Cop3Component } from 'src/cop3/cop3.component';

const routes: Routes = [{ path: '', component: PaymentComponent },
{
  path:"cop3",
  component:Cop3Component
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
