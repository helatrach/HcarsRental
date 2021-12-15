import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,

  ],
  providers: [
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-Fr' },
    {provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
