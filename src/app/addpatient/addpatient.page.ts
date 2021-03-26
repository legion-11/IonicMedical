import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchingService } from '../shared/fetching.service'
import { AuthenticationService } from "../auth/shared/authentication.service";
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.page.html',
  styleUrls: ['./addpatient.page.scss'],
})
export class AddpatientPage implements OnInit {
  patient = {
    _id: undefined,
    name: "",
    address: "",
    in_critical_condition: false,
    notes: "Medication:\n",
    phone_number: "",
    room: "",
    // todo uncomment
    user_id: "this.authService.userData.uid",
  }

  constructor(
    private fetching: FetchingService,
    public authService: AuthenticationService,
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    ) { }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.patient = (this.route.snapshot.data['special'] !== undefined) ? this.route.snapshot.data['special'] : this.patient;
    }
  }
  addEditPatient(){
    console.log(this.patient._id)
    var result = (this.patient._id === undefined) ? this.fetching.AddPatient(this.patient) : this.fetching.EditPatient(this.patient)
    result.subscribe(
      (data: any) => {
        console.log(data)
        this.dataService.setPatientsData(data._id, data);
        this.router.navigate(['/viewpatient/' + data._id]);
      },
      (err) => {
        console.log(err)
      },

    )
  }
}
