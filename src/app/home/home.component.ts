import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "Truong Phuoc Thinh";
  public age = 18;
  public traicay=['Sầu riêng','Xoài','Mít','Ổi'];
  public traicay2=[
    {ten:'Xoài', gia:'100',km:true},
    {ten:'Táo', gia:'200',km:true},
    {ten:'Cóc', gia:'690',km:false},
    {ten:'Chôm chôm', gia:'280',km:true}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
