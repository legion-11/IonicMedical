import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { FetchingService } from '../shared/fetching.service'
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-listofcriticalpatients',
  templateUrl: './listofcriticalpatients.page.html',
  styleUrls: ['./listofcriticalpatients.page.scss'],
})
export class ListofcriticalpatientsPage implements OnInit {

  constructor(
    private fetching: FetchingService,
    private router: Router,
    private dataService: DataService,
    ) { }

  ngOnInit() {
  }

  yourArray = [
  ]
  openPatientData(data) {
    this.dataService.setPatientsData(data._id, data);
    this.router.navigate(['/viewpatient/' + data._id]);
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
