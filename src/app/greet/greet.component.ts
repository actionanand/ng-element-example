import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class GreetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
