import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-element-example';

  showMessage() {
    const greet = document.getElementById('greet');
    greet.innerHTML = '<app-greet></app-greet>';
  }
}