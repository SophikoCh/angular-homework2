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

  

 
 
  
  
  ngOnInit(): void {
  }


}
