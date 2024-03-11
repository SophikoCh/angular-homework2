import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { SectionTask2Component } from './section-task2/section-task2.component';
@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    SectionTask2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
