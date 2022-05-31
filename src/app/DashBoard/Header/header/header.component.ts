import { Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor() {
 
  }

  ngOnInit(): void {
    const k = of(1,2,3,4,5,6,7,8,9);
    const EveneNums = filter((x:number)=>x%2===0);
    const EventValue=EveneNums(k);
    EventValue.subscribe((data)=>{
      console.log(data)
    })
  }

}
