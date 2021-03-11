import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-patient',
  templateUrl: './viewpatient.page.html',
  styleUrls: ['./viewpatient.page.scss'],
})
export class ViewPatientPage implements OnInit {

  constructor(private route: Router) { }

  editvitals() {
    this.route.navigate(['editvitals']);
  }

  ngOnInit() {
  }

}
