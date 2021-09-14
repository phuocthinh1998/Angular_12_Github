import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "Truong Phuoc Thinh";
  public age = 18;
  public traicay=['Sầu riêng','Xoài','Mít','Ổi']
  constructor() { }

  ngOnInit(): void {
  }

}
