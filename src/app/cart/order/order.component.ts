import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from "../../core/local-storage.service";
import { FormValidationService } from "../../shared/services/form-validation.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public userData: FormGroup;
  public spinnerShow = false;

  constructor(
    private lc: LocalStorageService,
    private fb: FormBuilder
  ) {
    this.userData = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, FormValidationService.emailValidator]],
      city: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {
    let user = this.lc.getItem('user');
    if (user) {
      this.userData.setValue({
        username: user.name,
        email: user.email,
      })
    }
  }
}
