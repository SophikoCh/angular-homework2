import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homework2';
  
  major: number = 0;
  majorLog: string = '';
  onIncrement() {
    this.major++;
    this.minor = 0;
    this.majorLog = "Initial value of major set to " + this.major;

  }

  minor: number = 0;
  minorLog: string = '';
  minorIncrement() {
    this.minor++;
    this.minorLog = "minor changed from " + this.minor + " to " + ++this.minor;

  }
  
}