import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialogRef } from "@angular/material";
import { LocalStorageService } from "../../local-storage.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  public email: FormControl = new FormControl();
  public password: FormControl = new FormControl();

  constructor(private auth: AuthService, private lc: LocalStorageService, public matDialogRef: MatDialogRef<SigninComponent>) { }

  ngOnInit() {
  }

  login() {
    this.auth.signin({email: this.email.value, password: this.password.value}).subscribe(
      (res: any) => {
        this.lc.setItem('user', res.user);
        this.matDialogRef.close();
      },
      error => {
        console.log(error);
      }
    )
  }
}
