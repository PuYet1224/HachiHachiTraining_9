import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() resizable: 'none' | 'both' | 'horizontal' | 'vertical' | 'auto' = 'none';
  @Input() title: string = '';
  @Input() type: 'text' | 'textarea' | 'numeric' = 'text';

  @Output() blur = new EventEmitter<{ oldValue: any, newValue: any }>();
  @Output() focus = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<any>();

  public innerValue: any = '';
  private previousValue: any = '';
  private onChange: (_: any) => void = (_: any) => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.innerValue = value;
    this.previousValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onInputChange(value: any): void {
    this.innerValue = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }
  onBlur(event: any): void {
    console.log('Sự kiện blur được kích hoạt:', event);
    console.log('Giá trị cũ:', this.previousValue, ' - Giá trị hiện tại:', this.innerValue);
    if (this.previousValue !== this.innerValue) {
      this.blur.emit({ oldValue: this.previousValue, newValue: this.innerValue });
      this.previousValue = this.innerValue;
    }
    this.onTouched();
  }
  onFocus(event: any): void {
    console.log('Sự kiện focus được kích hoạt:', event);
    this.focus.emit(event);
  }
}
