import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chaps-angular-library';

  onClickButton(): void {
    console.log("Button was just clicked");
  }
}
