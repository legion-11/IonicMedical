import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private route: Router) { }

  listofpatients() {
    this.route.navigate(['list-of-patients']);
  }

  ngOnInit() {
  }

}
