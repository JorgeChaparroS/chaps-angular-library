import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'chaps-lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent {
  @Input() placeholder = '';
  @Output() onValueChange = new EventEmitter();

  valueInput = '';

  onChange: (_: any) => void = (_: any) => {}
  onTouched: (_: any) => void = (_: any) => {}

  writeValue(value: string): void {
    this.valueInput = value;
    this.updateChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateChanges(): void {
    this.onChange(this.valueInput);
    this.onValueChange.emit(this.valueInput);
  }
}
