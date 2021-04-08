import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchingService } from '../shared/fetching.service'
import { ToastController } from '@ionic/angular';
import { DataService } from '../shared/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-editvitals',
  templateUrl: './editvitals.page.html',
  styleUrls: ['./editvitals.page.scss'],
})
export class EditvitalsPage implements OnInit {

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

  vitals = {
    patient_id: undefined,
    measured: "",
    bloodPresure: "",
    respiratoryRate: "",
    bloodOxigen: "",
    hearthRate: "",
    date: ""
  }

  vitalsList: any;

   data: any;

  constructor(
    private fetching: FetchingService,
    private router: Router,
    private route: ActivatedRoute,
    public toastController: ToastController,
    private dataService: DataService,
    private http: HttpClient,

  ) {


   }

   async presentToastGood() {
    const toast = await this.toastController.create({
      message: 'Patient Vitals have been saved',
      duration: 4000
    });
    toast.present();
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

   addEditVitals() {

    this.fetching.AddVitals(this.patient._id, this.vitals).subscribe(
      (data: []) => {
        this.vitalsList = data
        console.log(data);
        this.presentToastGood();
      });
      
  }
    
}


