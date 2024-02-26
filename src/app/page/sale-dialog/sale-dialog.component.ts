import { Component, Inject } from '@angular/core';
import { PaymentService } from 'src/app/service/payment.service';
import { Payment } from '../payment/payment';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-example-dialog',
  templateUrl: 'sale-dialog.component.html',
})
export class SaleDialogComponent {
  payments: Payment[] = [];
  troco = 0.0;

  constructor(
    public dialogRef: MatDialogRef<SaleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private paymentService: PaymentService) {
      this.data.pago=0;
      this.data.payment=null;
      this.calc();
     }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.listPayment();
  }

  listPayment() {
    this.paymentService.findAll().subscribe((response) => {
      this.payments = response;
    });
  }
  calc() {
    this.troco = this.data.pago - this.data.pagar;
    this.data.troco = String(this.troco.toFixed(2));
  }
}