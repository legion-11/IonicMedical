import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    public toastController: ToastController
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

  restore(form) {
    this.authService.PasswordRecover(form.value.email)
      .then((res) => {
        this.presentToast("Check your email")
        this.router.navigate(['login']);
      }).catch((error) => {
        this.presentToast(error.message)
      })
  }

}
