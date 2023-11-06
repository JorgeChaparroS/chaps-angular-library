import { Component, Input } from '@angular/core';

@Component({
  selector: 'chaps-lib-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() showLoading: boolean = false;
  @Input() loaderMessage: string = '';
  @Input() customImageUrl: string = '';
}
