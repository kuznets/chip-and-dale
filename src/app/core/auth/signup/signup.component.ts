import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  public email: FormControl = new FormControl();
  public password: FormControl = new FormControl();
  public name: FormControl = new FormControl();
  public city: FormControl = new FormControl();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signUp() {
    this.auth.signup({
      email: this.email.value,
      password: this.password.value,
      name: this.name.value,
      city: this.city.value
    });
  }
}
