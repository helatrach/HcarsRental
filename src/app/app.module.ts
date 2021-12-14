import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RentalComponent } from './rental/rental.component';
import { CarsComponent } from './rental/cars/cars.component';
import { OneCarComponent } from './rental/one-car/one-car.component';
import { CartComponent } from './rental/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalRentalViewComponent } from './rental/modal-rental-view/modal-rental-view.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  {path:'home', component : HomeComponent},
  {path:'rental', component : RentalComponent},
  {path:'oneCar/:id', component : OneCarComponent},
  {path:'login', component : LoginComponent},
  {path:'register', component : RegisterComponent},
  {path:'notFound', component : NotFoundComponent},
  {path:'', component : RentalComponent},
  {path:'**', redirectTo : 'notFound', pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RentalComponent,
    CarsComponent,
    OneCarComponent,
    CartComponent,
    NotFoundComponent,
    ModalRentalViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
