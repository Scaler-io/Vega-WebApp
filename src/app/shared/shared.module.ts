import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './components/textbox/textbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectboxComponent } from './components/selectbox/selectbox.component';

@NgModule({
  declarations: [TextboxComponent, SelectboxComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TextboxComponent, SelectboxComponent, ReactiveFormsModule],
})
export class SharedModule {}
