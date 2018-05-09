import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl } from '@angular/forms';
import { LocalStorageService } from "../../local-storage.service";
import { MatDialogRef } from "@angular/material";

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

  constructor(private auth: AuthService, private lc: LocalStorageService, public matDialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit() {
  }

  signUp() {
    this.auth.signup({
      email: this.email.value,
      password: this.password.value,
      name: this.name.value,
      city: this.city.value
    }).subscribe(
      res => {
        this.lc.setItem('user', res);
        this.matDialogRef.close();
      },
      error => {
        console.log(error);
      }
    );
  }
}
