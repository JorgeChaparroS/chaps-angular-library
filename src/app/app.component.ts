import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoaderService, AlertService, DropdownOption } from 'chaps-angular-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public loaderService: LoaderService,
    public alertService: AlertService) {
    this.loaderService.setLoading(false);
    this.loaderService.setMessage('Another message');
  }

  title = 'chaps-angular-library';

  //For input:
  emitterValueInput = '';
  ngModelValueInput = '';

  onInputChange(value: any): void {
    console.log("Value input: ", value);
    this.emitterValueInput = value;
  }

  inputReactiveForm: FormGroup = new FormGroup({
    inputName: new FormControl('', [])
  });
  
  //For dropdowns: 
  dropdownOptions: DropdownOption[] = [
    { value: 'car1', name: 'Car #1' },
    { value: 'car2', name: 'Car #2' },
    { value: 'car3', name: 'Car #3' },
    { value: 'car4', name: 'Car #4' },
    { value: 'car5', name: 'Car #5' },
  ];

  dropdownValueEventEmmiter = '';
  onOptionSelected(option: DropdownOption): void {
    console.log("Option selected with emitter", option);
    this.dropdownValueEventEmmiter = JSON.stringify(option);
  }

  ngModelDropdownValue = null;
  ngModelDropdownValueInit = this.dropdownOptions[3].value;

  dropdownReactiveForm: FormGroup = new FormGroup({
    dropdownName: new FormControl('', [])
  });

  dropdownReactiveForm2: FormGroup = new FormGroup({
    dropdownName: new FormControl(this.dropdownOptions[2].value, [])
  });

  //For buttons:
  onClickButton(): void {
    console.log("Button was just clicked");
  }

  //For loader:
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

  //For paginator: 
  paginatorCurrentPage = 5;
  onPaginationEvent(page: any): void {
    console.log("Current page: ", page);
    this.paginatorCurrentPage = page;
  }

  //For JorgeChaparro's CV:
  showCV = false;
  onShowCV(): void {
    this.showCV = true;
  }

  onHideCV(): void {
    this.showCV = false;
  }
}
