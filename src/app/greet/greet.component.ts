import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class GreetComponent implements OnInit {
  @Input() title: string = 'Ng Elements Example';
  @Input() name: string = 'Anand Raja';
  @Input() occupation: string = 'Software Engineer';
  @Input() location: string = 'Kanyakumari';
  @Input() quote: string = 'Programming is an Art!';
  @Output() display = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  showInfo() {
    this.display.emit(`${this.name} 's occupation is ${this.occupation} and based at ${this.location}.
    Quote is: ${this.quote}`);
  }

}
