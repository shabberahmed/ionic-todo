import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompletedComponent } from './completed.component';

@NgModule({
  declarations: [CompletedComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [CompletedComponent]
})
export class CompletedModule { }
