import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  
  demo: any;

  constructor() { }

  ngOnInit() {
  }

  countDownDate = new Date("october 24, 2020 15:35:20").getTime();

  x = setInterval(() => {

    var todaysdate = new Date().getTime();
    var difference = this.countDownDate - todaysdate;
    var days = Math.floor(difference / (1000 * 60 * 60* 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 )));
    var minutes = Math.floor((difference % (1000 * 60 * 60 ) / (1000 * 60 )));
    var seconds = Math.floor((difference) % (1000 * 60 ) / 1000);

    this.demo = days + "d : "  + hours + "h : "  + minutes + "m : "  + seconds + "s";



  });


}
