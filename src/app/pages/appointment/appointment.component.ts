import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: string;
  name: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
  {position: 'Cardiologista', name: 'Dr. Carlos Caio Ferreira', weight: '01/01/2020', symbol: '13:00'},
];

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
