import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-rental-view',
  templateUrl: './modal-rental-view.component.html',
  styleUrls: ['./modal-rental-view.component.css']
})
export class ModalRentalViewComponent implements OnInit {

  @Input() cars : Car[]
  picUrl = `${environment.api_show}`

  constructor() { }

  ngOnInit(): void {
  }

}
