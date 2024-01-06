import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LandingComponent } from './Components/landing/landing.component';
import { SearchComponent } from './Components/search/search.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { RegisterComponent } from './Components/register/register.component';
import { authGuardGuard } from './Guards/auth-guard.guard';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: '', component: MainLayoutComponent,children: [
      {path:'', component: LandingComponent },
      {path:'Home', component:CatalogComponent, canActivate: [authGuardGuard]},
      {path:'Search', component:SearchComponent},
      {path:'Movie/:id', component:MovieDetailsComponent, canActivate: [authGuardGuard]},
    ]  
  },
  
  {path:'Login', component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Logout', component:LoginComponent},
  {path:'**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
