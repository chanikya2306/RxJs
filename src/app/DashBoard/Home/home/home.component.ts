import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  details: any = [];
  constructor() {

  }

  ngOnInit(): void {
    this.details.push(data);
    for (let i = 0; i < this.details.length; i++) {
      this.details[i];
      console.log(this.details[i]);
    }
  }

}
