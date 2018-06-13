import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../local-storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormValidationService } from '../../../shared/services/form-validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  public regForm: FormGroup;
  public spinnerShow = false;

  constructor(
    private auth: AuthService,
    private lc: LocalStorageService,
    public matDialogRef: MatDialogRef<SignupComponent>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, FormValidationService.emailValidator]],
      password: ['', [Validators.required, FormValidationService.passwordValidator]],
      confirm: ['', FormValidationService.confirmValidator] // TODO How to send inside method confirm and password?
    });
  }

  signup() {
    this.spinnerShow = !this.spinnerShow;
    this.auth.signup(this.regForm.value).subscribe(
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
