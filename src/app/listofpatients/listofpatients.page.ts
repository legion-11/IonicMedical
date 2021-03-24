import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { FetchingService } from '../shared/fetching.service'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listofpatients',
  templateUrl: './listofpatients.page.html',
  styleUrls: ['./listofpatients.page.scss'],
})
export class ListofpatientsPage implements OnInit {

  constructor(
    private fetching: FetchingService,
    private router: Router,
    public toastController: ToastController
    ) { }


  addpatient() {
    this.router.navigate(['addpatient']);
  }

  ngOnInit() {
  }

  yourArray = []
  openPatientData(data) {
    // console.log(data)
    this.router.navigate(['/viewpatient', data]);
  }

  ionViewWillEnter() {
    this.fetching.GetPatients().subscribe(
      (data: []) => {
        this.yourArray = data
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

}
