import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-patients',
  templateUrl: './list-of-patients.page.html',
  styleUrls: ['./list-of-patients.page.scss'],
})
export class ListOfPatientsPage implements OnInit {

  constructor(private route: Router) { }

  addpatient() {
    this.route.navigate(['addpatient']);
  }


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
