import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chaps-angular-library';

  emitterValueInput = '';
  ngModelValueInput = '';

  inputReactiveForm: FormGroup = new FormGroup({
    inputName: new FormControl('', [])
  });
  
  onClickButton(): void {
    console.log("Button was just clicked");
  }

  onInputChange(value: any): void {
    console.log("Value input: ", value);
    this.emitterValueInput = value;
  }
}
