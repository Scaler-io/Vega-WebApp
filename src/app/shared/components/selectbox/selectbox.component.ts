import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Self,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { SelectOption } from './select-box.model';

@Component({
  selector: 'vega-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss'],
})
export class SelectboxComponent implements OnInit, ControlValueAccessor {
  @ViewChild('select', { static: true }) select: ElementRef;
  @Input() label: string;
  @Input() selectOptions: SelectOption[];

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    this.initSelectBox();
  }

  public initSelectBox() {
    const control = this.controlDir.control;
    const validators = control.validator ? [control.validator] : [];
    const asyncValidators = control.asyncValidator
      ? [control.asyncValidator]
      : [];

    control.setValidators(validators);
    control.setAsyncValidators(asyncValidators);
    control.updateValueAndValidity();
  }

  public onChange(event) {}
  public onTouched() {}

  writeValue(obj: any): void {
    this.select.nativeElement.value = obj || '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
