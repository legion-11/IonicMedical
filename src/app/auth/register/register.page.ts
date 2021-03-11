import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthenticationService } from "../shared/authentication.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public toastController: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
  }
  async presentToast(mes) {
    const toast = await this.toastController.create({
      message: mes,
      duration: 2000
    });
    toast.present();
  }

  register(form) {
    console.log("regiser", form.value.password, form.confirm)
    if (form.value.password == form.value.confirm) {
      this.authService.RegisterUser(form.value.email, form.value.password)
      .then((res) => {
        this.authService.SendVerificationMail()
        this.presentToast("verification letter was sent")
      }).catch((error) => {
        this.presentToast(error.message)
      })
    }
  }

}


