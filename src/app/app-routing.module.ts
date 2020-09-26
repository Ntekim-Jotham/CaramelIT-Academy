import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CoursesComponent } from './modules/courses/courses.component';
// import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './users/authorised/home/home.component';
import { LoginComponent } from './users/authorised/login/login.component';
import { RegisterComponent } from './users/authorised/register/register.component';

const routes: Routes = [
  { path: 'welcome', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: CoursesComponent }
    ]

  },
  // { path: 'courses', component: CoursesComponent },

      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
