// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { LoginComponent } from './pages/login/login.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'about', loadComponent: () => import('././pages/about/about.component').then(c => c.AboutComponent) },
//   { path: 'login', component: LoginComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(c => c.AboutComponent)
  },
  { path: 'login', component: LoginComponent },
  { path: 'contact-us', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
