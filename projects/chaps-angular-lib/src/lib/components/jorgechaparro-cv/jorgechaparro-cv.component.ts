import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chaps-lib-jorgechaparro-cv',
  templateUrl: './jorgechaparro-cv.component.html',
  styleUrls: ['./jorgechaparro-cv.component.scss']
})
export class JorgechaparroCvComponent implements OnInit {

  age = 0;

  ngOnInit(): void {
    this.age = this.calculateAge(new Date('1998/10/26'));
  }

  calculateAge(dateOfBirth: Date): number {
    var ageDifMs = Date.now() - dateOfBirth.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  } 
}
