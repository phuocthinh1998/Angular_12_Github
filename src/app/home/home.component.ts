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
  public districts: string[]=['Quận/huyện'
  ];
  public cityData=[
    {city:'Chọn thành phố',district:['Quận/huyện']},
    {city: 'Cà Mau', district: [
    'Thành phố Cà Mau',
    'huyện Cái Nước',
    'huyện Năm Căn',
    'huyện Đầm Dơi',
    'huyện U minh',
    'huyện Phú Tân'
  ],
},
{city: 'Bạc Liêu', district: [
  'Thành phố Bạc Liêu',
  'huyện Hồng Dân',
  'huyện Phước Long',
  'Thị xã Giá Rai',
],
}
];
  constructor() { }

  ngOnInit(): void {
    console.log('cities: ', this.cityData)
  }
  public changecity(event:any):void{
    const city = event.target.value;
    if(!city){
      return;
    }
    // console.log('event',city);
    // const search = this.cityData.filter((data)=>data.city===city)
    // console.log('event',search);
    // if(search && search.length>0){
    //   this.districts=search[0].district;
    // }
    this.districts=this.cityData.find(data=>data.city===city)?.district || [];
  }

}
