import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from "../../local-storage.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  public regForm: FormGroup;
  public spinnerShow: boolean = false;

  constructor(
    private auth: AuthService,
    private lc: LocalStorageService,
    public matDialogRef: MatDialogRef<SignupComponent>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(2)]
    });
  }

  signUp() {
    this.spinnerShow = !this.spinnerShow;
    this.auth.signup(this.regForm.value).subscribe(
      res => {
        this.lc.setItem('user', res);
        this.matDialogRef.close();
      },
      error => {
        console.log(error);
        this.spinnerShow = !this.spinnerShow;
      }
    );
  }
}
