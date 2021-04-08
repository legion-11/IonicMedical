import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FetchingService } from '../shared/fetching.service'
import { ToastController } from '@ionic/angular';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-view-patient',
  templateUrl: './viewpatient.page.html',
  styleUrls: ['./viewpatient.page.scss'],
})
export class ViewPatientPage implements OnInit {
  patient = {
    _id: "",
    name: "",
    address: "",
    in_critical_condition: false,
    notes: "",
    phone_number: "",
    room: "",
    // todo uncomment
    user_id: "",
  }

  vitalsList: any[]

  constructor(
    private fetching: FetchingService,
    private router: Router,
    private route: ActivatedRoute,
    public toastController: ToastController,
    private dataService: DataService,
    ) { }



    

/*
  editvitals() {
    this.router.navigate(['editvitals/:id']);
  }

*/

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.patient = this.route.snapshot.data['special'];
      console.log(this.patient)
    }
  }


  yourArray = []
  openPatientData(data) {
    console.log(this.patient._id)
    var result = (this.patient._id === undefined) ? this.fetching.AddPatient(this.patient) : this.fetching.EditPatient(this.patient)
    result.subscribe(
      (data: any) => {
        console.log(data)
        this.dataService.setPatientsData(data._id, data);
        this.router.navigate(['/editvitals/' + data._id]);
      },
      (err) => {
        console.log(err)
      },

    )
   
  }



  ionViewWillEnter() {
    this.fetching.GetVitals(this.patient._id).subscribe(
      (data: []) => {
        this.vitalsList = data
        console.log(data);

      },
      (err) => {
        console.log(err)
        this.presentToast(err.message)
      }
    )
  }



  async presentToast(mes: string) {
    const toast = await this.toastController.create({
      message: mes,
      duration: 2000
    });
    toast.present();
  }
  openVitalsData(data) {}
}


