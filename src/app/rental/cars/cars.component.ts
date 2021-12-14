import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit , OnDestroy{

  cars = [];
  carSub : Subscription;
  picUrl = `${environment.api_show}`

  constructor( private carService : CarService) { }


  ngOnInit(): void {
    console.log("were in comp");

    this.carSub =this.carService.carSub.subscribe(
      (data) => {
        this.cars = data;
      },
      (error) => {
         console.log("bad things");

      }
    )

    this.carService.emitCars();
  }
  ngOnDestroy(): void {
    this.carSub.unsubscribe();
  }

}
