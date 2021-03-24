import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { FetchingService } from '../shared/fetching.service'

@Component({
  selector: 'app-listofcriticalpatients',
  templateUrl: './listofcriticalpatients.page.html',
  styleUrls: ['./listofcriticalpatients.page.scss'],
})
export class ListofcriticalpatientsPage implements OnInit {

  constructor(
    private fetching: FetchingService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  yourArray = [
  ]
  openPatientData(data) {
    // console.log(data)
    this.router.navigate(['/viewpatient', data]);
  }

  ionViewWillEnter() {
    this.fetching.GetPatients().subscribe(
      (data: []) => {
        this.yourArray = data.filter(({in_critical_condition}) => in_critical_condition===true)
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
