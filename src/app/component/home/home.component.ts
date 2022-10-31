import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Snack:MatSnackBar) { }

  ngOnInit(): void {
  }
btnclick(){
  console.log("btn click");
  this.Snack.open("hey welcome to this app")
}

}