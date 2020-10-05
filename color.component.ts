import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  numbers = [-1, -10, 0, 1, 25, 85, 40, 50, 60, 70, 80, 100, -100]
  constructor() { }

  ngOnInit() {
  }

}
