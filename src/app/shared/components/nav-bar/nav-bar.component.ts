import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {SigninComponent} from "../../../core/auth/signin/signin.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  signIn() {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
