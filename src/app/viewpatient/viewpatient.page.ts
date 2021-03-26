import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchingService } from '../shared/fetching.service'
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-view-patient',
  templateUrl: './viewpatient.page.html',
  styleUrls: ['./viewpatient.page.scss'],
})
export class ViewPatientPage implements OnInit {
  patient = {
    _id: undefined,
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
    ) { }

  editvitals() {
    this.router.navigate(['editvitals']);
  }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.patient = this.route.snapshot.data['special'];
      console.log(this.patient)
    }
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
