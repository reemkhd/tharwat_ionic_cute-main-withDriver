import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  public orderList: any = [
    {
      name: "Shahad Aldera",
      district: "Gandhinagar",
      date: "15/05/2021",
      time: "13:45",
      requestId: "91"
    },
    {
      name: "Neel Khamar",
      district: "Ahmedabad",
      date: "12/05/2021",
      time: "21:35",
      requestId: "87"
    },
    {
      name: "Dummy User",
      district: "Gandhinagar",
      date: "10/05/2021",
      time: "15:45",
      requestId: "86"
    },
    {
      name: "Neel Khamar",
      district: "UAE",
      date: "12/05/2021",
      time: "21:35",
      requestId: "85"
    },
    {
      name: "Shahad Aldera",
      district: "South Africa",
      date: "15/05/2021",
      time: "13:45",
      requestId: "84"
    },
    {
      name: "Test User",
      district: "Ahmedabad",
      date: "12/05/2021",
      time: "09:35",
      requestId: "81"
    }
  ];

  constructor() { }

  ngOnInit() {}

}
