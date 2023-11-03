import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MainThemeComponent } from './components/main-theme/main-theme.component';

@NgModule({
  declarations: [
    AlertComponent,
    ButtonComponent,
    InputComponent,
    LoaderComponent,
    PaginatorComponent,
    MainThemeComponent
  ],
  imports: [
  ],
  exports: [
    AlertComponent,
    ButtonComponent,
    InputComponent,
    LoaderComponent,
    PaginatorComponent,
    MainThemeComponent
  ]
})
export class ChapsAngularLibModule { }
