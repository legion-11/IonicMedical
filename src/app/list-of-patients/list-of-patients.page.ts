import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-patients',
  templateUrl: './list-of-patients.page.html',
  styleUrls: ['./list-of-patients.page.scss'],
})
export class ListOfPatientsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // TODO load from internet
  }
  yourArray = [
    {name: "Ferdinand Braun", conditionGood: true},
    {name: "Rey", conditionGood: false},
    {name: "Ferdinand Braun", conditionGood: true},

  ]
  openPatientData(data) {
    console.log(data)
  }
}
