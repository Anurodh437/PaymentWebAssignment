import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailsService {
  constructor() {}

  getPaymentDetails() {
    return [
      {
        transactionDate: '7 Oct 2020',
        transactionTime: '10:24 AM',
        transactionAmount: '3000',
        transactionType: 'pay',
        transactionId: 'A1234156256787382783899',
        isRequested: false,
      },
      {
        transactionDate: '18 Nov 2020',
        transactionTime: '10:24 AM',
        transactionAmount: '250',
        transactionType: 'pay',
        transactionId: 'A1234156256787382783899',
        isRequested: true,
      },
      {
        transactionDate: '19 Oct 2020',
        transactionTime: '10:24 AM',
        transactionAmount: '250',
        transactionType: 'collect',
        transactionId: 'A1234156256787382783899',
        isRequested: false,
      },
      {
        transactionDate: '19 Oct 2020',
        transactionTime: '10:24 AM',
        transactionAmount: '250',
        transactionType: 'collect',
        transactionId: 'A1234156256787382783899',
        isRequested: true,
      },
    ];
  }
}
