import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  modalMessage = { title: '', text: '' };
  THREE_SECONDS_IN_MILESECONDS = 3000;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AlertComponent>) {
  }

  ngOnInit(): void {
    this.modalMessage = this.data;

    setTimeout(() => {
      this.dialogRef.close()
    }, this.THREE_SECONDS_IN_MILESECONDS);
  }
}
