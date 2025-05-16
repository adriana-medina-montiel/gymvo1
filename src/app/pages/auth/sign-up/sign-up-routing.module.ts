
import { Routes, RouterModule } from '@angular/router';

import { SignUpPage } from './sign-up.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
