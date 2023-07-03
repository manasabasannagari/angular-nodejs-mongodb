import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private svc:AppService){

  }
ngOnInit(): void {
  console.log('loadde')
  this.svc.getWeather().subscribe((res:any)=>{
    console.log(res);
  })
}
}
