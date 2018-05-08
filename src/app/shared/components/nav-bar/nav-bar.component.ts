import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SigninComponent } from '../../../core/auth/signin/signin.component';
import { SignupComponent } from '../../../core/auth/signup/signup.component';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public user: any = false;

  constructor(public dialog: MatDialog, private auth: AuthService) { }

  signIn() {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = this.auth.getUserInfo();
    });
  }

  signUp() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = this.auth.getUserInfo();
      console.log(`(signUp) Dialog result: ${result}`);
    });
  }

  Logout() {
    this.user = false;
    this.auth.logout();
  }

  checkUser() {
    this.user = this.auth.getUserInfo();
  }

  ngOnInit() {
    this.checkUser();
  }

}
