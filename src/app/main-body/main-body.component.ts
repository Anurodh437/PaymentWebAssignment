import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from '../payment-details.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
})
export class MainBodyComponent implements OnInit {

  public payments: any = [];

  constructor(private _transaction: PaymentDetailsService) {}

  ngOnInit(): void {
    this.payments = this._transaction.getPaymentDetails();
  }

  public dates = new Set<String>();
  dateExists(date: any) {
    if (this.dates.has(date)) {
      return true;
    } else {
      this.dates.add(date);
      return false;
    }
  }
}
