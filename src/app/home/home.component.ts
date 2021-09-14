import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "Truong Phuoc Thinh";
  constructor() { }

  ngOnInit(): void {
  }
  public resetName(): void{
    console.log("Reset Name");
    this.name = '';
  }
}
