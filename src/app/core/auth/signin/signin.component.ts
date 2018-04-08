import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  public email: FormControl = new FormControl();
  public password: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('email', this.email.value);
  }

}
