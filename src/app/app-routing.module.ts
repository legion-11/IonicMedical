import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'addpatient',
    loadChildren: () => import('./addpatient/addpatient.module').then( m => m.AddpatientPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'editvitals',
    loadChildren: () => import('./editvitals/editvitals.module').then( m => m.EditvitalsPageModule)
  },
  {
    path: 'viewpatient',
    loadChildren: () => import('./viewpatient/viewpatient.module').then( m => m.ViewPatientPageModule)
  },
  {
    path: 'listofpatients',
    loadChildren: () => import('./listofpatients/listofpatients.module').then( m => m.ListofpatientsPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./auth/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'listofcriticalpatients',
    loadChildren: () => import('./listofcriticalpatients/listofcriticalpatients.module').then( m => m.ListofcriticalpatientsPageModule)
  },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
