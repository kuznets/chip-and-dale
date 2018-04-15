import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  public email: FormControl = new FormControl();
  public password: FormControl = new FormControl();

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  login() {
    this.auth.signin({email: this.email.value, password: this.password.value});
  }
}
