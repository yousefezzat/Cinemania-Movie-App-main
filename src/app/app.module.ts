import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ScrollBackgroundDirective } from './Directives/scroll-background.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './Services/movie.service';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';
import { SearchComponent } from './Components/search/search.component';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './Components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SearchComponent,
    NavbarComponent,
    ScrollBackgroundDirective,
    MainLayoutComponent,
    MovieDetailsComponent,
    CatalogComponent,
    RegisterComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
