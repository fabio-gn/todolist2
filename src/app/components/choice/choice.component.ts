import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent {
constructor(public router: Router){}
goPlaces(str:string){
  this.router.navigateByUrl(str)
}
}
