import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars : Car[] = [];
  carSub = new Subject<Car[]>();

  constructor(private http : HttpClient) {
    this.getCars();
  }


  emitCars(){
    this.carSub.next(this.cars);
  }


  getCars(){
    console.log("we in getcars service");

    const urlcars = `${environment.api_cars + "GetAllAvailbleCars"}`;
    this.http.get(urlcars).subscribe(
      (data : Car[]) => {
        this.cars = data;
        this.emitCars();
        console.log(this.cars);
      },
      (error) => {
        console.log("error" + error);
      }
    )
  }
}
