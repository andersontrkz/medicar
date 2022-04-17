import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  title: string = ''
  text: string = '';

  THREE_SECONDS_IN_MILESECONDS = 2000;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AlertComponent>
  ) {
      this.title = this.data.title;
      this.text = this.data.text;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close()
    }, this.THREE_SECONDS_IN_MILESECONDS);
  }
}
