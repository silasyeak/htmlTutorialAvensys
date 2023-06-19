import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cop1Component } from 'src/cop1/cop1.component';
import { Cop2Component } from 'src/cop2/cop2.component';
import { Cop3Component } from 'src/cop3/cop3.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Pg404Component } from './pg404/pg404.component';
import { guard1Guard } from './guard1.guard';
import { secondgGuard } from './secondg.guard';
import { thirdgGuard } from './thirdg.guard';
import { pay2guardGuard } from './pay2guard.guard';
import { deactiveGuard } from './deactive.guard';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Auth1Guard } from './auth1.guard.ts.guard';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
  path:"form",
  component:Form1Component
  },
  {
    path:"form2",
    component: Form2Component
  },
  {
    path:"cop1",
    component:Cop1Component
  },
  {
    path:"product",
    component:ProductComponent,
    canDeactivate:[deactiveGuard]
  },
// {
//   path:"product",
// canActivate:[guard1Guard],
// children:[
//   {
//     path:"",
//     component:ProductComponent
//   },
//   {
//     path:'',
//     canActivateChild:[thirdgGuard],
//     children:[
//       {path:"cop1",component:Cop1Component},
//       {path:"cop2",component:Cop2Component},
//       {path:"cop3",component:Cop3Component}
//     ]
//   }
// ]
// },

{ path: 'payment', 
canLoad:[Auth1Guard],
loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },

{ path: 'pay2', 
canMatch:[pay2guardGuard],//CanMatch guard
loadChildren: () => import('./pay2/pay2.module').then(m => m.Pay2Module) },


{
  path:"**",
  component:Pg404Component
}


];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
