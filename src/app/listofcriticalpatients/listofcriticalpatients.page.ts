import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-listofcriticalpatients',
  templateUrl: './listofcriticalpatients.page.html',
  styleUrls: ['./listofcriticalpatients.page.scss'],
})
export class ListofcriticalpatientsPage implements OnInit {

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
  }

  yourArray = [
    {name: "Ferdinand Braun", conditionGood: true},
    {name: "Rey", conditionGood: false},
    {name: "Ferdinand Braun", conditionGood: true},

  ]
  openPatientData(data) {
    // console.log(data)
    this.router.navigate(['/viewpatient', data]);
  }
}
