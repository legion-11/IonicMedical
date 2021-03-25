import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-patient',
  templateUrl: './viewpatient.page.html',
  styleUrls: ['./viewpatient.page.scss'],
})
export class ViewPatientPage implements OnInit {
  patientsData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,) { }

  editvitals() {
    this.router.navigate(['editvitals']);
  }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.patientsData = this.route.snapshot.data['special'];
      console.log(this.patientsData)
    }
  }

}
