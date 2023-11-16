import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MainThemeComponent } from './components/main-theme/main-theme.component';
import { JorgechaparroCvComponent } from './components/jorgechaparro-cv/jorgechaparro-cv.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AlertComponent,
    ButtonComponent,
    InputComponent,
    LoaderComponent,
    PaginatorComponent,
    MainThemeComponent,
    JorgechaparroCvComponent,
    DropdownComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    AlertComponent,
    ButtonComponent,
    InputComponent,
    LoaderComponent,
    PaginatorComponent,
    MainThemeComponent,
    JorgechaparroCvComponent,
    DropdownComponent
  ]
})
export class ChapsAngularLibModule { }
