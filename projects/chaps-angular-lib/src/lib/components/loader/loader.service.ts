import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading = false; 
  private message = '';

  constructor() { }

  setLoading(loading: boolean): void {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }

  setMessage(message: string): void {
    this.message = message;
  }

  getMessage(): string {
    return this.message;
  }
}
