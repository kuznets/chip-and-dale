import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  public email: FormControl = new FormControl();
  public password: FormControl = new FormControl();
  public username: FormControl = new FormControl();
  public confirm: FormControl = new FormControl();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.auth.signup({
      email: this.email.value,
      password: this.password.value,
      username: this.username.value,
      confirm: this.confirm.value
    });
  }
}
