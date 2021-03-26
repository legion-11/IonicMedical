import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-patient',
  templateUrl: './viewpatient.page.html',
  styleUrls: ['./viewpatient.page.scss'],
})
export class ViewPatientPage implements OnInit {
  patient = {
    _id: undefined,
    name: "",
    address: "1212",
    in_critical_condition: false,
    notes: "",
    phone_number: "",
    room: "",
    // todo uncomment
    user_id: "",
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,) { }

  editvitals() {
    this.router.navigate(['editvitals']);
  }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.patient = this.route.snapshot.data['special'];
      console.log(this.patient)
    }
  }

}
