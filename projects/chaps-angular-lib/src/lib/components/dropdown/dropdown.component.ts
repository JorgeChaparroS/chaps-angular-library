import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export interface DropdownOption {
  value: any;
  name: string;
}

@Component({
  selector: 'chaps-lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})

export class DropdownComponent {

  @Input() id = '';
  @Input() options: DropdownOption[] = [];
  @Input() placeholder = '';
  @Output() onOptionSelected = new EventEmitter();

  selectedOption: any = null;

  onChange: (_: any) => void = (_: any) => {}
  onTouched: (_: any) => void = (_: any) => {}

  writeValue(value: any): void {
    this.selectedOption = value;
    this.updateChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateChanges(): void {
    this.onChange(this.selectedOption);
    this.onOptionClicked();
  }

  onOptionClicked(): void {
    const option: DropdownOption|null = this.options.find((option: DropdownOption) => option.value === this.selectedOption) || null;
    this.onOptionSelected.emit(option);
  }
}
