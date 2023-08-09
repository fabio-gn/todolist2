import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsServiceService } from 'src/app/posts-service.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent {
constructor(public router: Router, public postServ:PostsServiceService){}
goPlaces(str:string){
  this.router.navigateByUrl(str)
}
recoverData(){
  this.postServ.getData()
}
}
