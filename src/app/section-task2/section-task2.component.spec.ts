import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTask2Component } from './section-task2.component';

describe('SectionTask2Component', () => {
  let component: SectionTask2Component;
  let fixture: ComponentFixture<SectionTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTask2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
