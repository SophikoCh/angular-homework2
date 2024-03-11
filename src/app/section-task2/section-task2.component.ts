import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section-task2',
  templateUrl: './section-task2.component.html',
  styleUrls: ['./section-task2.component.scss']
})
export class SectionTask2Component implements OnInit {

  @Input() name: string = '';
  @Output() sumAgreeEvent = new EventEmitter<number>();
  @Output() sumDisagreeEvent = new EventEmitter<number>();
    constructor() { }

    sumAgree: number = 0;
    sumDisagree: number = 0;
  ngOnInit(): void {
  }

  onAgree(value: number) {
    this.sumAgreeEvent.emit(value);
  }

  onDisagree() {
    this.sumDisagreeEvent.emit();
    
  }

}
