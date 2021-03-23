import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../auth/shared/authentication.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private route: Router,
    public authService: AuthenticationService,) { }

  listofpatients() {
    this.route.navigate(['listofpatients']);
  }

  listofcriticalpatients() {
    this.route.navigate(['listofcriticalpatients']);
  }
  ngOnInit() {
  }

  SignOut() {
    this.authService.SignOut()
  }

}
