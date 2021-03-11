import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthenticationService } from "../shared/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  register(form) {
    // this.authService.register(form.value).subscribe((res) => {
    //   this.router.navigateByUrl('home');
    // });
    console.log("regiser")
  }

}
