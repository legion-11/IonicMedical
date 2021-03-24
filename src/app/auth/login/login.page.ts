import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    public toastController: ToastController,
    ) { }

  ngOnInit() {
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Account is not verified',
      message: 'Check your email',
      position: 'middle',
      buttons: [
        {
          text: 'Resend',
          handler: () => {
            this.authService.SendVerificationMail()
          }
        }, {
          text: 'Ok',
          role: 'cancel',
        }
      ]
    });
    toast.present();
  }

  async presentToast(mes: string) {
    const toast = await this.toastController.create({
      message: mes,
      duration: 2000
    });
    toast.present();
  }

  async login(form) {
    await this.authService.SignIn(form.value.email, form.value.password)
    .then((res) => {
        if(res.user.emailVerified) {
          this.router.navigate(['landing']);
        } else {
          this.presentToastWithOptions()
          return false;
        }
      }).catch((error) => {
        this.presentToast(error.message)
      })
  }

}
