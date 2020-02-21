import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadBtnComponent } from './load-btn/load-btn.component';



@NgModule({
  declarations: [LoadBtnComponent],
  exports: [LoadBtnComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
