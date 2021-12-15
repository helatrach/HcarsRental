import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-rental-view',
  templateUrl: './modal-rental-view.component.html',
  styleUrls: ['./modal-rental-view.component.css']
})
export class ModalRentalViewComponent implements OnInit {

  @Input() cars : Car[]
  picUrl = `${environment.api_show}`

  rentForm : FormGroup;

  dates = [];

  @ViewChild('closebutton') closebutton;

  constructor(private rentalService : RentalService , private fb: FormBuilder, private router : Router , private carService : CarService) {}

  ngOnInit(): void {
    this.InitRentForm();
  }

  InitRentForm(){

    this.rentalService.getUnvailbleDates(1).subscribe(
      (data) => {
        this.dates = data;
      }
    );



    this.rentForm = this.fb.group({
      startDate : this.fb.control('', Validators.required),
      endDate : this.fb.control('', Validators.required)
    })
  }

  OnSubmit(carId) : void{
    const startDate = this.rentForm.get('startDate').value;
    const endDate = this.rentForm.get('endDate').value;

    const rental : Rental = {
      rentDate : startDate,
      returnDate : endDate,
      carId : carId,
      customerId : 3
    }
    console.log(startDate + " " + endDate + " " + carId);
    this.rentalService.Rent(rental).then(
      (data ) => {
        this.close();
        this.carService.getCars();
      }
    ).catch(
      (error) => {
        console.log("error" + error);
      }
    )
  }

  close(){
    this.closebutton.nativeElement.click();
  }

  unavailbleDates = [
    new Date("12/16/2021"),
    new Date("12/18/2021"),
    new Date("12/21/2021"),
];

  getUnavailbleDates(){


      console.log(this.unavailbleDates);

      console.log(this.dates);
    this.dates.forEach(element => {
     this.unavailbleDates.push(new Date(element));
   });
   }



dateFilter = (d: Date): boolean => {
const time=d.getTime();
return !this.unavailbleDates.find(x=>x.getTime()==time);
}
minDate = new Date();
}
