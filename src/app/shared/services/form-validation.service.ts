import { Injectable } from '@angular/core';

@Injectable()
export class FormValidationService {

  constructor() { }

  // Get validation error message
  static getValidationErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      'invalidEmailAddress': 'Invalid email address',
    };

    return config[validatorName];
  }

  // Validate email address
  static emailValidator(email) {
    // tslint:disable-next-line:max-line-length
    if (email.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  // Validate password
  static passwordValidator(password) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (password.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  // Validate password confirm.
  static confirmValidator(confirm, password) {
    if (confirm !== password) {
      return null;
    } else {
      return { 'confirmedPasswords': true };
    }
  }

}
