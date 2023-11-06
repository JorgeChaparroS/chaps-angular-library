import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoaderService } from 'chaps-angular-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public loaderService: LoaderService) {
    this.loaderService.setLoading(false);
    this.loaderService.setMessage('Another message');
  }

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

  showLoader = false;
  onShowLoader(): void {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 3000);
  }

  onShowLoaderService(): void {
    this.loaderService.setLoading(true);
    setTimeout(() => {
      this.loaderService.setLoading(false);
    }, 3000);
  }
}
