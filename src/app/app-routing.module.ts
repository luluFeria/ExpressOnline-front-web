import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './views/auth/signin/signin.component';
import { SignupComponent } from './views/auth/signup/signup.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
