import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRentalViewComponent } from './modal-rental-view.component';

describe('ModalRentalViewComponent', () => {
  let component: ModalRentalViewComponent;
  let fixture: ComponentFixture<ModalRentalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRentalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRentalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
