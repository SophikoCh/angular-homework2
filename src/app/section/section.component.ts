import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {


  constructor() { }

  @Input() major: number = 0;
  @Input() minor: number = 0;
  @Input() minorLog: string = '';
  @Input() majorLog: string = '';

  

 
 
  @Output() clickAgree = new EventEmitter();

  // onAgree() {
  //   this.agree++;
  //   this.disagree = 0;
  // }
  
  // onDisagree() { 
  //   this.disagree++;
  //   this.agree = 0; 
  // }
  
  ngOnInit(): void {
  }


  onAgree(count:number) {
    this.clickAgree.emit(count);
  }
}
