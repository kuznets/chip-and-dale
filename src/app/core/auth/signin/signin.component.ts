import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from '../../local-storage.service';
import { FormValidationService } from '../../../shared/services/form-validation.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  public loginForm: FormGroup;
  public spinnerShow = false;

  constructor(
    private auth: AuthService,
    private lc: LocalStorageService,
    private matDialogRef: MatDialogRef<SigninComponent>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, FormValidationService.emailValidator]],
      password: ['', [Validators.required, FormValidationService.passwordValidator]]
    });
  }

  signin() {
    this.spinnerShow = !this.spinnerShow;
    console.log('Login form data: ', this.loginForm);
    this.auth.signin(this.loginForm.value).subscribe(
      (res: any) => {
        this.lc.setItem('user', res.user);

        this.matDialogRef.close();
      },
      error => {
        console.log(error);
        this.spinnerShow = !this.spinnerShow;
      }
    );
  }
}
