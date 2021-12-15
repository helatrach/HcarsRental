import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private readonly rentUrl : string = `${environment.api_rent}`
  private readonly UnavailbleDatesUrl : string = `${environment.api_unavailble_dates}`
  constructor(private http : HttpClient) { }

  public Rent(rental : Rental){
    return new Promise(
      (resolve, reject) => {
        this.http.post(this.rentUrl,rental).subscribe(
          (data) => {
           console.log(data);
           resolve(data);
          },
          (error) => {
            console.log(error);
            reject(false);
          }
        )

      }
    )
  }


  getUnvailbleDates(carId): Observable<Date[]> {
    return this.http.post<any[]>(this.UnavailbleDatesUrl,carId)
  }


}
